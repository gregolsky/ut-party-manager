angular.module('ut.core')
    .factory('itemToItemUsabilityRules', [
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
                createRuleCanHaveOnlyOneItemOfType;

            cannotHaveTwoSameItems = new UsabilityRule(
                true,
                function (item1, item2) {
                    return item1.id != item2.id;
                });

            cannotUseShieldWhenUsingTwoHandedMelee = new UsabilityRule(
                false,
                function (item1, item2) {
                    if (item1.isA(ItemType.MeleeWeapon) &&
                        item1.properties.isTwoHanded &&
                        item2.isA(ItemType.Shield)) {
                        return false;
                    }

                    return true;
                });

            cannotUseShieldWhenUsingLightweightWeapon = new UsabilityRule(
                false,
                function (item1, item2) {
                    if (item1.isA(ItemType.Shield) &&
                        item2.isA(ItemType.MeleeWeapon) &&
                        item2.properties.isLightweight) {
                        return false;
                    }

                    return true;
                });

            createRuleCanHaveOnlyOneItemOfType = function (itemType) {
                return new UsabilityRule(true, function (item1, item2) {
                    return item1.type != itemType || item2.type != itemType;
                });
            };

            return [
                cannotHaveTwoSameItems,
                cannotUseShieldWhenUsingTwoHandedMelee,
                cannotUseShieldWhenUsingLightweightWeapon,
                createRuleCanHaveOnlyOneItemOfType(ItemType.Armor),
                createRuleCanHaveOnlyOneItemOfType(ItemType.Helmet),
                createRuleCanHaveOnlyOneItemOfType(ItemType.Shield),
                createRuleCanHaveOnlyOneItemOfType(ItemType.Greaves),
                createRuleCanHaveOnlyOneItemOfType(ItemType.Equipment)
                ];
        }]);