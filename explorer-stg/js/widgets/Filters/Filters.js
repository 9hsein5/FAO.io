define([
    "dojo/_base/declare",
    "dojo/_base/lang",
    "dojo/on",
    "dojo/text!./templates/filters.html",
    "dijit/_WidgetBase",
    "dijit/_TemplatedMixin",
    "dijit/_WidgetsInTemplateMixin",
    "dojo/dom-class",
    "dojo/dom-construct",
    "dojo/Evented",
    "widgets/CategoryList/CategoryList",
    "widgets/FilterBadge/FilterBadge",
    "widgets/AutocompleteOption/AutocompleteOption",
    "esri/request",
], function (
    declare,
    lang,
    on,
    template,
    _WidgetBase,
    _TemplatedMixin,
    _WidgetsInTemplateMixin,
    domClass,
    domConstruct,
    Evented,
    CategoryList,
    FilterBadge,
    AutocompleteOption,
    esriRequest
) {
    return declare(
        [_WidgetBase, _TemplatedMixin, _WidgetsInTemplateMixin, Evented],
        {
            templateString: template,
            categoryList: null,
            filters: {
                values: [],
                badges: [],
            },
            filterBadges: [],
            lastSearchResponse: null,
            results: [],
            where: null,

            constructor: function (options) {
                lang.mixin(this, options);
            },

            postCreate: function () {
                this.categoryList = new CategoryList(
                    {},
                    domConstruct.create("div", {}, this.categoriesContainer)
                );
                this.getPortalCategories();
                this.handleEvents();
                this.search();
            },

            loadAndDisplayAutocompleteOptions: function () {
                esriRequest(
                    `${this.config.portalUrl}/sharing/rest/content/groups/${this.config.groupId}/search/suggest`,
                    {
                        query: {
                            f: "json",
                            q: this.searchbarInput.value,
                            filters: `(type:("Web Map") -type:"Web Mapping Application")${
                                this.config.isAGOL
                                    ? " AND orgid:" + this.config.portalId
                                    : ""
                            }`,
                        },
                    }
                ).then((response) => {
                    dijit.registry
                        .findWidgets(this.autocompleteList)
                        .forEach((option) => {
                            option.destroyRecursive();
                        });
                    response.data.results.forEach((result) => {
                        on(
                            new AutocompleteOption(
                                { item: result },
                                domConstruct.create(
                                    "div",
                                    {},
                                    this.autocompleteList
                                )
                            ),
                            "item-selected",
                            (newSearch) => {
                                this.searchbarInput.value = newSearch;
                                this.search();
                                domClass.add(
                                    this.autocompleteOptionsContainer,
                                    "hidden"
                                );
                            }
                        );
                    });
                    if (response.data.results.length > 0) {
                        domClass.remove(
                            this.autocompleteOptionsContainer,
                            "hidden"
                        );
                    } else {
                        domClass.add(
                            this.autocompleteOptionsContainer,
                            "hidden"
                        );
                    }
                });
            },

            handleEvents: function () {
                const showHideClearBtn = () => {
                    if (this.searchbarInput.value.length > 0) {
                        domClass.remove(this.clearBtn, "hidden");
                    } else {
                        domClass.add(this.clearBtn, "hidden");
                    }
                };

                on(this.searchbarInput, "keyup", (evt) => {
                    showHideClearBtn();
                    if (evt.key === "Enter") {
                        this.search();
                    }
                    if (this.searchbarInput.value.length > 0) {
                        this.loadAndDisplayAutocompleteOptions();
                    } else {
                        domClass.add(
                            this.autocompleteOptionsContainer,
                            "hidden"
                        );
                    }
                });

                on(this.clearBtn, "click", () => {
                    this.searchbarInput.value = "";
                    showHideClearBtn();
                    this.search();
                    domClass.add(this.autocompleteOptionsContainer, "hidden");
                });

                on(this.filterToggler, "click", () => {
                    domClass.toggle(this.categoriesContainer, "hidden");
                    domClass.toggle(this.filterToggler, "rotated");
                });

                on(this.clearAllBtn, "click", () => {
                    this.deselect("all");
                });

                on(
                    this.categoryList,
                    "selection-changed",
                    this.selectionUpdated.bind(this)
                );
            },

            selectionUpdated: function () {
                const selection = this.categoryList.getSelection();
                this.filters = selection;
                if (this.filters.values.length === 0) {
                    domClass.add(this.filterGallery, "hidden");
                } else {
                    domClass.remove(this.filterGallery, "hidden");
                    this.filterBadges.forEach((filterBadge) => {
                        filterBadge.destroy();
                    });
                    this.filterBadges = [];
                    this.filters.badges.forEach((badge) => {
                        const filterBadge = new FilterBadge(
                            { title: badge.title, value: badge.value },
                            domConstruct.create(
                                "div",
                                {},
                                this.clearAllBtn,
                                "before"
                            )
                        );
                        on(filterBadge, "cleared", this.deselect.bind(this));
                        this.filterBadges.push(filterBadge);
                    });
                }
                this.search();
                this.where = "(" + this.countriesFilter() + ") AND (" + this.timeFilter() + ")";
            },

            countriesFilter: function() {
                const selection = this.categoryList.getSelection();
                this.filters = selection;
                if (this.filters.values.length === 0) {
                    return "1=1";
                }
                else {
                    const selectedCountries = [];
                    let where_clause = '';
                    this.filters.badges.forEach((cat, index) => {
                        if (cat.value.startsWith("/Categories/Countries/")) {
                            selectedCountries.push(cat.title)
                        }
                    });
                    selectedCountries.forEach((cntry, index) => {
                        if (index !== selectedCountries.length-1) {
                            where_clause += "adm0_name = '" + cntry + "' OR ";
                        }
                        else {
                            where_clause += "adm0_name = '" + cntry + "'";
                        }
                    });
                    if (where_clause === '') {
                        return "1=1";
                    }
                    else {
                        return where_clause;
                    }     
                }
            },

            timeFilter: function() {
                const selection = this.categoryList.getSelection();
                this.filters = selection;
                if (this.filters.values.length === 0) {
                    return "1=1";
                }
                else {
                    const selectedTime = [];
                    let where_clause = '';
                    this.filters.badges.forEach((cat, index) => {
                        if (cat.value.startsWith("/Categories/Latest Data/")) {
                            selectedTime.push(cat.title)
                        }
                    });
                    selectedTime.forEach((time, index) => {
                        const d = new Date();
                        const month = parseInt(time.replace(/[^0-9]/g,''), 10);
                        d.setMonth(d.getMonth() - month);
                        const time_filter = d.toISOString().substring(0, 10);
                        if (index !== selectedTime.length-1) {
                            where_clause += "";
                        }
                        else {
                            where_clause += "coll_end_date >= DATE '" + time_filter + "'";
                        }
                    });
                    if (where_clause === '') {
                        return "1=1";
                    }
                    else {
                        return where_clause;
                    }     
                }
            },

            setCategories: function (categories) {
                this.categoryList.setCategories(categories);
            },

            deselect: function (deselection) {
                this.categoryList.deselect(deselection);
                this.selectionUpdated();
            },

            search: function () {
                const countries_selected = [];
                for (let index = 0; index < this.filters.values.length; index++) {
                    if (this.filters.values[index].includes('/Categories/Countries/')) {
                        countries_selected.push(((this.filters.values[index]).substring((this.filters.values[index]).lastIndexOf('/') + 1)));
                        this.filters.values[index] = '/Categories/Countries';
                    }
                    if (this.filters.values[index].includes('/Categories/Latest Data/')) {
                        this.filters.values[index] = '/Categories/Latest Data';
                    }
                }
                this.filters.values = (this.filters.values).filter((item, index) => (this.filters.values).indexOf(item) === index);
                esriRequest(`${this.config.portalUrl}/sharing/rest/content/groups/${this.config.groupId}/search`, {
                    query: {
                        f: "json",
                        q: `${
                            this.searchbarInput.value.length > 0
                                ? "(" + this.searchbarInput.value + ") "
                                : " "
                        }(type:("Web Map") -type:"Web Mapping Application")${
                            this.config.isAGOL && false
                                ? " orgid:" + this.config.portalId
                                : ""
                        }${
                            this.config.groupId &&
                            this.config.groupId.length > 0
                                ? " group:" + this.config.groupId
                                : ""
                        }`,
                        categories:
                            this.filters.values.length > 0
                                ? this.filters.values.join(",")
                                : "/Categories",
                        sortField: "modified",
                        sortOrder: "desc",
                        filter:
                            countries_selected.length > 0
                                ? "(tags:(" + countries_selected.join(" OR ") + ")) "
                                : "",
                    },
                }).then((response) => {
                    this.lastSearchResponse = response.data;
                    this.results = this.lastSearchResponse.results;
                    this.emit("new-results", {
                        total: this.lastSearchResponse.total,
                        results: this.results,
                    });
                });
            },

            addResults: function () {
                if (this.lastSearchResponse.nextStart > 0) {
                    esriRequest(
                        `${this.config.portalUrl}/sharing/rest/content/groups/${this.config.groupId}/search`,
                        {
                            query: {
                                f: "json",
                                q: `${
                                    this.searchbarInput.value.length > 0
                                        ? "(" + this.searchbarInput.value + ") "
                                        : " "
                                }(type:("Web Map") -type:"Web Mapping Application")${
                                    this.config.isAGOL &&
                                    false /*TODO: remove false*/
                                        ? " orgid:" + this.config.portalId
                                        : ""
                                }`,
                                categories:
                                    this.filters.values.length > 0 
                                        ? this.filters.values.join(",")
                                        : "/Categories",
                                sortField: "modified",
                                sortOrder: "desc",
                                start: this.lastSearchResponse.nextStart,
                            },
                        }
                    ).then((response) => {
                        this.lastSearchResponse = response.data;
                        this.results = [
                            ...this.results,
                            ...this.lastSearchResponse.results,
                        ];
                        this.emit("added-results", {
                            results: this.lastSearchResponse.results,
                        });
                    });
                }
            },

            getPortalCategories: function () {
                esriRequest(
                    `${this.config.portalUrl}/sharing/rest/community/groups/${this.config.groupId}/categorySchema`,
                    {
                        query: {
                            f: "json",
                        },
                        responseType: "json",
                    }
                ).then((response) => {
                    const json = response.data.categorySchema[0].categories;
                    this.countriesList["categories"].sort((a, b) => {
                        if (a.title < b.title) 
                                return -1; 
                            if (a.title > b.title) 
                                return 1; 
                            return 0;
                        });
                    json.forEach((element, index) => {
                        if ( element.title === "Countries") {
                            json[index] = this.countriesList;
                        }
                        if ( element.title === "Latest Data") {
                            json[index] = this.latestDataList;
                        }
                    });
                    this.setCategories(
                        json
                    );
                });
            },
        }
    );
});
