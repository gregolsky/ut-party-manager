angular.module('ut.core')
    .factory('partyRelatedUsabilityRules', [
        'ArmorClass',
        'ItemType',
        function (ArmorClass, ItemType) {
            'use strict';

            var UsabilityRule = function (check) {
                this.check = check;
            };

            var partyCanHaveOnlyTwoInstancesOfSameEquipmentItem =
                new UsabilityRule(function (party, item) {
                    
                    if (item.type != ItemType.Equipment) {
                        return true;   
                    }
                    
                    var partyItems = _(party.members)
                        .map(function (character) {
                            return character.equipment;
                        })
                        .flatten()
                        .value();

                    var itemsAlike = _.filter(partyItems, function(partyItemId) {
                        return partyItemId == item.id;  
                    });
                    
                    return itemsAlike.length < 2;
                });
            
            return [
                partyCanHaveOnlyTwoInstancesOfSameEquipmentItem   
            ];

        }]);