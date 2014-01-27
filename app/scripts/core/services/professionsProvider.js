
angular.module('ut.services')
    .factory('professionsProvider', [
        'professions',
        function (professions) {
            'use strict';
            
            var BARD_ID = 5;
            
            var isBard = function (character) {
                return character.profession == BARD_ID;  
            };
            
            var getAvailableProfessions = function (party) {
                if (_.some(party.members, isBard)) {
                    return _.filter(professions, function (profession) {
                       return profession.id !== BARD_ID; 
                    });
                }
                
                return professions;
            };
            
            return {
                getAvailableProfessions: getAvailableProfessions
            };
            
        }]);