angular.module('ut.core.constants')
    .factory('_buildLookupFromList', [
        'enumerations',
        function (ut) {

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
            return builder(lists.races);
    }])
    .factory('professionsLookup', [
        '_buildLookupFromList',
        'enumerations',
    function (builder, lists) {
            return builder(lists.professions);
    }])
    .factory('itemsLookup', [
        '_buildLookupFromList',
        'enumerations',
    function (builder, lists) {
            return builder(lists.items);
    }])
    .factory('lookups', ['racesLookup', 'professionsLookup', 'itemsLookup',
    function (races, professions, items) {
            return {
                'races': races,
                'professions': professions,
                'items': items
            };
}]);