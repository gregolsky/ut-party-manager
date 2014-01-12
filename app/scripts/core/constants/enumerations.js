angular.module('ut.core.constants')
    .factory('enumerations', [
        'natures', 'races', 'professions', 'items',
        function (natures, races, professions, items) {
            'use strict';
            return {
                'natures': natures,
                'races': races,
                'professions': professions,
                'items': items
            };
}]);