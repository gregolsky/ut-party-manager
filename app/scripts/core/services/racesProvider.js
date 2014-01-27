angular.module('ut.services')
    .factory('racesProvider', [
        'races',
        'natures',
        function (races, natures) {
            'use strict';

            var getAvailableRaces = function (party) {

                var partyNature = _.find(natures, function (nature) {
                    return party.nature == nature.id;
                });

                var availableNatures = partyNature.getCompositeNatures();

                return _.filter(races, function (race) {
                    return _.some(race.natures, function (raceNature) {
                        return _.some(availableNatures, function (n) {
                            return n == raceNature;
                        });
                    });
                });
            }
            
            return {
                getAvailableRaces: getAvailableRaces   
            };

        }]);