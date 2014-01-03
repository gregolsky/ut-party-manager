
angular.module('ut.core.constants')
//.factory('_lookupBuilder'
.factory('racesLookup', [
        'enumerations',
    function (ut) {
            var races = ut.races;
            var raceLookup = {};
            for (var i = 0; i < races.length; i++) {
                raceLookup[races[i].id] = races[i];
            }

            return raceLookup;

    }])
.factory('professionsLookup', [
    'enumerations',
    function (ut) {

            var professions = ut.professions;
            var professionLookup = {};
            for (var i = 0; i < professions.length; i++) {
                professionLookup[professions[i].id] = professions[i];
            }

            return professionLookup;

    }]).factory('itemsLookup', [
    'enumerations',
    function (ut) {
            var items = ut.items;
            var itemsLookup = {};
            for (var i = 0; i < items.length; i++) {
                itemsLookup[items[i].id] = items[i];
            }

            return itemsLookup;
    }]);