define([
    "dojo/_base/declare",
    "dojo/query",
    "dojo/dom-class",
    "dojo/on",
    "esri/request",
    "dojo/dom-construct",
    "widgets/Filters/Filters",
    "widgets/ResultsGallery/ResultsGallery",
    "esri/WebMap",
    "esri/views/MapView",
    "esri/widgets/Expand",
    "esri/widgets/Legend",
    "dojo/domReady!",
], function (
    declare,
    query,
    domClass,
    on,
    esriRequest,
    domConstruct,
    Filters,
    ResultsGallery,
    WebMap,
    MapView,
    Expand,
    Legend
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
            this.mapview = new MapView({
                container: "mapview-container",
            });
            this.newMap(this.config.defaultItem);
            this.mapview.ui.add(
                new Expand({
                    expandIconClass: "esri-icon-legend",
                    view: this.mapview,
                    content: new Legend({
                        container: domConstruct.create("div"),
                        view: this.mapview,
                    }),
                }),
                "bottom-left"
            );
            this.handleEvents();
        },

        handleEvents: function () {
            on(query(".drawer .handle")[0], "click", () => {
                domClass.toggle(query(".drawer")[0], "closed");
            });

            on(query(".share-icon-container")[0], "click", () => {
                domClass.toggle(query(".sharebox-container")[0], "hidden");
            });

            on(query(".sharebox .closeicon")[0], "click", () => {
                domClass.add(query(".sharebox-container")[0], "hidden");
            });

            on(query(".sharebox .copybtn")[0], "click", () => {
                const sharelink = query("#sharelink")[0];
                sharelink.blur();
                sharelink.focus();
                sharelink.select();
                document.execCommand("copy");
            });

            on(this.filters, "new-results", (resultInfo) => {
                this.gallery.newResults(resultInfo);
                this.updateBottomScroll();
            });
            on(this.filters, "added-results", (resultInfo) => {
                this.gallery.addResults(resultInfo);
                this.updateBottomScroll();
            });
            on(this.gallery, "item-selected", this.newMap.bind(this));
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

        newMap: function (id) {
            query("#maptitle")[0].innerText = "";
            query("#sharelink")[0].value = "";

            const webmap = new WebMap({
                portalItem: {
                    id: id,
                },
                portal: {
                    url: this.config.portalUrl,
                },
            });

            webmap.when(() => {
                query("#maptitle")[0].innerText = webmap.portalItem.title;
                query("#sharelink")[0].value = this.config.sharePath.replace(
                    "{id}",
                    id
                );
            });

            this.mapview.map = webmap;
        },
    });
});
