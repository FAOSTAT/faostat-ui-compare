/* global define */
define(['jquery',
    'handlebars',
    'text!faostat-ui-compare/html/templates.hbs',
    'i18n!faostat-ui-compare/nls/translate',
    'faostat_commons',
    'wds_client',
    'bootstrap',
    'sweetAlert',
    'amplify'], function ($, Handlebars, templates, translate, FAOSTATCommons, WDSClient) {

    'use strict';

    function COMPARE() {

        this.o = {

            w: null,
            lang: 'E',
            prefix: '',
            placeholder_id: '',
            url_wds_crud: 'http://fenixapps2.fao.org/wds_5.1/rest/crud'
        };
    }

    COMPARE.prototype.init = function(config) {

        /* Extend default configuration. */
        this.o = $.extend(true, {}, this.o, config);

        /* Fix the language, if needed. */
        this.o.lang = this.o.lang !== null ? this.o.lang : 'en';

        /* Store FAOSTAT language. */
        this.o.lang_faostat = FAOSTATCommons.iso2faostat(this.o.lang);

        /* getting placeholder */
        var $placeholder = $(this.o.placeholder_id).length > 0? $(this.o.placeholder_id): $("#" + this.o.placeholder_id);

        /* render */
        this.render($placeholder, this.o);
    };


    COMPARE.prototype.render = function($placeholder, config) {

        var source = $(templates).html();
        var template = Handlebars.compile(source);
        var dynamic_data = {
            title: translate.compare
        };
        var html = template(dynamic_data);

        /* rendering template **/
        $placeholder.html(html);
    };

    COMPARE.prototype.destroy = function() {

    };

    return COMPARE;

});