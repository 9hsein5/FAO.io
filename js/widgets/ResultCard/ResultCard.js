define([
    "dojo/_base/declare",
    "dojo/_base/lang",
    "dojo/on",
    "dojo/text!./templates/resultCard.html",
    "dijit/_WidgetBase",
    "dijit/_TemplatedMixin",
    "dijit/_WidgetsInTemplateMixin",
    "dojo/Evented",
], function (
    declare,
    lang,
    on,
    template,
    _WidgetBase,
    _TemplatedMixin,
    _WidgetsInTemplateMixin,
    Evented
) {
    return declare(
        [_WidgetBase, _TemplatedMixin, _WidgetsInTemplateMixin, Evented],
        {
            templateString: template,

            constructor: function (options) {
                lang.mixin(this, options);
            },

            postCreate: function () {
                if (this.result.thumbnail) {
                    this.cardImage.src = `${this.config.portalUrl}/sharing/content/items/${this.result.id}/info/${this.result.thumbnail}`;
                }
                this.titleDiv.title = this.result.title;
                this.titleLink.href = `${this.config.portalUrl}/home/item.html?id=${this.result.id}`;
                this.titleLink.innerText = this.result.title;
                this.descriptionP.title = this.result.snippet;
                this.descriptionP.innerText = this.snipDesc(
                    this.result.snippet
                );
                this.handleEvents();
            },

            snipDesc: function (desc) {
                if (!desc || desc.length < 75) {
                    return desc;
                } else {
                    desc = desc.substring(0, 72);
                    return desc.substring(0, desc.lastIndexOf(" ")) + "...";
                }
            },

            handleEvents: function () {
                on(this.metadataBtn, "click", () => {
                    window.open(
                        `${this.config.portalUrl}/home/item.html?id=${this.result.id}`,
                        "_blank"
                    );
                });
                on(this.viewBtn, "click", () => {
                    this.emit("item-selected", this.result.id);
                });
            },
        }
    );
});