define([
    "dojo/_base/declare",
    "dojo/query",
    "dojo/dom-class",
    "dojo/on",
    "esri/request",
    "dojo/dom-construct",
    "widgets/Filters/Filters",
    "widgets/ResultsGallery/ResultsGallery",
    "dojo/domReady!",
], function (
    declare,
    query,
    domClass,
    on,
    esriRequest,
    domConstruct,
    Filters,
    ResultsGallery
) {
    return declare(null, {
        config: null,
        filters: null,
        gallery: null,
        scrollToBottomSignal: null,

        constructor: function (config) {
            this.config = config;
        },

        startup: function () {
            this.config.portalUrl = this.config.portalUrl.trimEnd("/");
            this.config.isAGOL =
                this.config.portalUrl.indexOf("maps.arcgis.com") > -1;
            this.getPortalId().then(() => {
                this.init();
            });
        },

        init: function () {
            this.filters = new Filters(
                { config: this.config },
                domConstruct.create("div", {}, query("#drawerContent")[0])
            );
            this.gallery = new ResultsGallery(
                { config: this.config },
                domConstruct.create("div", {}, query("#drawerContent")[0])
            );
            this.handleEvents();
        },

        handleEvents: function () {
            on(query(".drawer .handle")[0], "click", () => {
                domClass.toggle(query(".drawer")[0], "closed");
            });
            on(this.filters, "new-results", (resultInfo) => {
                this.gallery.newResults(resultInfo);
                this.updateBottomScroll();
            });
            on(this.filters, "added-results", (resultInfo) => {
                this.gallery.addResults(resultInfo);
                this.updateBottomScroll();
            });
        },

        updateBottomScroll: function () {
            if (this.scrollToBottomSignal) {
                this.scrollToBottomSignal.remove();
            }
            this.scrollToBottomSignal = on(
                query("#drawerContent")[0],
                "scroll",
                (evt) => {
                    if (
                        evt.target.clientHeight + evt.target.scrollTop >=
                        evt.target.scrollHeight - 100
                    ) {
                        this.filters.addResults();
                        if (this.scrollToBottomSignal) {
                            this.scrollToBottomSignal.remove();
                        }
                    }
                }
            );
        },

        getPortalId: function () {
            return new Promise((resolve, reject) => {
                if (this.config.isAGOL) {
                    esriRequest(
                        `${this.config.portalUrl}/sharing/rest/portals/self`,
                        { query: { f: "json" } }
                    ).then((response) => {
                        this.config.portalId = response.data.id;
                        resolve();
                    });
                } else {
                    resolve();
                }
            });
        },
    });
});
