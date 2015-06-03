/* global define*/
define(function() {

    'use strict';

    var config = {

        paths: {
            // should be fixed the module name? (entry point)
            'FAOSTAT_UI_COMPARE': './faostat-ui-compare',

            // config folders
            'faostat-ui-compare/html': '../html',
            'faostat-ui-compare/nls': '../nls'
        },
        shim: {
            bootstrap: {
                deps: ['jquery']
            }
        }

    };

    return config;

});