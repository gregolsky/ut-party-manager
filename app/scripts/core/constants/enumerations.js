angular.module('ut.core.constants')
    .factory('enumerations', [
        'races', 'professions', 'items',
        function (races, professions, items) {
            return {
                "races": races,
                "professions": professions,
                "items": items
            };
}]);

