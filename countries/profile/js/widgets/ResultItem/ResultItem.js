define([
    "dojo/_base/declare",
    "dojo/_base/lang",
    "dojo/text!./templates/resultItem.html",
    "dijit/_WidgetBase",
    "dijit/_TemplatedMixin",
    "dijit/_WidgetsInTemplateMixin",
    "dojo/Evented",
], function (
    declare,
    lang,
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
                this.fillInfo();
            },

            fillInfo: function () {
                this.itemLink.href = `${this.config.sharePath}/${this.item.id}`;
                
                if (this.item.thumbnail) {
                    this.itemImage.src = `${this.config.portalUrl}/sharing/content/items/${this.item.id}/info/${this.item.thumbnail}`;
                    this.itemImage.alt = this.item.snippet;
                } else {
                    this.itemImageContainer.style = "display: none";
                }

                this.itemTime.datetime = this.item.modified;
                this.itemTime.innerText = new Date(
                    this.item.modified
                ).toLocaleDateString();

                this.itemTitle.innerText = this.item.snippet;
            },
        }
    );
});
