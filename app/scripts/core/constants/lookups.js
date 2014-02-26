angular.module('ut.core')
    .factory('_buildLookupFromList', [

    function () {
            'use strict';
            var builder = function (list) {
                var lookup = {};
                for (var i = 0; i < list.length; i++) {
                    lookup[list[i].id] = list[i];
                }

                return lookup;
            };

            return builder;
    }])
    .factory('racesLookup', [
    '_buildLookupFromList',
    'enumerations',
    function (builder, lists) {
            'use strict';
            return builder(lists.races);
    }])
    .factory('professionsLookup', [
    '_buildLookupFromList',
    'enumerations',
    function (builder, lists) {
            'use strict';
            return builder(lists.professions);
    }])
    .factory('itemsLookup', [
    '_buildLookupFromList',
    'enumerations',
    function (builder, lists) {
            'use strict';
            return builder(lists.items);
    }])
    .factory('naturesLookup', [
    '_buildLookupFromList',
    'enumerations',
    function (builder, lists) {
            'use strict';
            return builder(lists.natures);
    }])
    .factory('lookups', ['racesLookup', 'professionsLookup', 'itemsLookup', 'naturesLookup',
                     function (races, professions, items, natures) {
            'use strict';
            return {
                'races': races,
                'professions': professions,
                'items': items,
                'natures': natures
            };
}]);