define([
    "dojo/_base/declare",
    "dojo/_base/lang",
    "dojo/on",
    "dojo/text!./templates/resultsGallery.html",
    "dijit/_WidgetBase",
    "dijit/_TemplatedMixin",
    "dijit/_WidgetsInTemplateMixin",
    "dojo/Evented",
    "dojo/dom-construct",
    "widgets/ResultCard/ResultCard",
], function (
    declare,
    lang,
    on,
    template,
    _WidgetBase,
    _TemplatedMixin,
    _WidgetsInTemplateMixin,
    Evented,
    domConstruct,
    ResultCard
) {
    return declare(
        [_WidgetBase, _TemplatedMixin, _WidgetsInTemplateMixin, Evented],
        {
            templateString: template,
            total: 0,
            results: [],
            displayedResults: [],

            constructor: function (options) {
                lang.mixin(this, options);
            },

            postCreate: function () {
                this.resultCountContainer.innerText = this.total;
            },

            newResults: function (resultInfo) {
                this.displayedResults.forEach((displayedResult) => {
                    displayedResult.destroy();
                });
                this.displayedResults = [];

                this.results = resultInfo.results;
                this.total = resultInfo.total;

                this.resultCountContainer.innerText = this.total.toLocaleString();
                this.results.forEach((result) => {
                    const resultCard = new ResultCard(
                        { config: this.config, result },
                        domConstruct.create("div", {}, this.resultsContainer)
                    );
                    this.displayedResults.push(resultCard);
                });
            },

            addResults: function (resultInfo) {
                this.results = [...this.results, ...resultInfo.results];
                resultInfo.results.forEach((result) => {
                    const resultCard = new ResultCard(
                        { config: this.config, result },
                        domConstruct.create("div", {}, this.resultsContainer)
                    );
                    this.displayedResults.push(resultCard);
                });
            },
        }
    );
});
