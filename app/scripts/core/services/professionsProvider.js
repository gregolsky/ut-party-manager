
angular.module('ut.core.services')
    .factory('professionsProvider', [
        'professions',
        function (professions) {
            'use strict';
            
            var BARD_ID = 5;
            
            var isBard = function (character) {
                return character.profession == BARD_ID;  
            };
            
            var getAvailableProfessions = function (character, party) {
                var filtered = _(professions);
                
                if (_.some(party.members, isBard)) {
                    filtered = filtered.filter(function (profession) {
                       return profession.id !== BARD_ID; 
                    });
                }
                
                filtered = filtered.filter(function (profession) {
                    return profession.raceFilter(character.race); 
                });
                
                filtered = filtered.filter(function (profession) {
                    return profession.natureFilter(party.nature); 
                });
                
                return filtered.value();
            };
            
            return {
                getAvailableProfessions: getAvailableProfessions
            };
            
        }]);