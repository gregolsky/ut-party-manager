angular.module('ut.core')
    .factory('usabilityRules', [
        'ArmorClass',
        'ItemType',
        function (ArmorClass, ItemType) {
            'use strict';

            var UsabilityRule = function (idempotent, check) {
                this.idempotent = idempotent;
                this.check = check;
            };

            var cannotHaveTwoSameItems,
                cannotUseShieldWhenUsingTwoHandedMelee,
                cannotUseShieldWhenUsingLightweightWeapon,
                canHaveOnlyOneEquipmentTypeItem;

            cannotHaveTwoSameItems = new UsabilityRule(true, function (item1, item2) {
                return item1.id != item2.id;
            });
            
            cannotUseShieldWhenUsingTwoHandedMelee = new UsabilityRule(false, function (item1, item2) {
                if (item1.isA(ItemType.MeleeWeapon) && 
                    item1.properties.isTwoHanded &&
                    item2.isA(ItemType.Shield)) {
                    return false;
                }
                
                return true;
            });

            cannotUseShieldWhenUsingLightweightWeapon = new UsabilityRule(false, function (item1, item2) {
                if (item1.isA(ItemType.Shield) && 
                    item2.isA(ItemType.MeleeWeapon) && 
                    item2.properties.isLightweight) {
                    return false;   
                }
                
                return true;
            });
            
            canHaveOnlyOneEquipmentTypeItem = new UsabilityRule(false, function (item1, item2) {
                return !(item1.isA(ItemType.Equipment) && item2.isA(ItemType.Equipment));
            });
            
            
            return [
                cannotHaveTwoSameItems,
                cannotUseShieldWhenUsingTwoHandedMelee,
                cannotUseShieldWhenUsingLightweightWeapon,
                canHaveOnlyOneEquipmentTypeItem
            ];
        }]);