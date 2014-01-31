angular.module('ut.core')
    .factory('characterRelatedUsabilityRules', [
        'ArmorClass',
        'ItemType',
        function (ArmorClass, ItemType) {
            'use strict';

            var UsabilityRule = function (check) {
                this.name = name;
                this.check = check;
            };

            var heavyArmorCanBeUsedByProfessionsWithCertainCost = new UsabilityRule(
                function (characterInfo, item) {
                    if (characterInfo.profession &&
                        item.properties &&
                        item.properties.armorClass &&
                        item.properties.armorClass == ArmorClass.Heavy) {
                        return characterInfo.profession.cost > 30;
                    }

                    return true;
                });

            var canBeUsedByCertainRaces = new UsabilityRule(function (characterInfo, item) {
                if (item.races &&
                    item.races.length &&
                    characterInfo.race && !_.some(item.races, function (raceId) {
                        return raceId == characterInfo.race.id;
                    })) {

                    return false;
                }

                return true;
            });

            var canHaveNoMoreThan2Weapons = new UsabilityRule(function (characterInfo, item) {

                if (!item.isWeapon()) {
                    return true;
                }

                var weaponsCount = _.filter(characterInfo.equipment, function (eqItem) {
                    return eqItem.isWeapon();
                }).length;

                return weaponsCount < 2;
            });

            var createCertainCharacterCannotUseItem = function (characterPredicate, itemId) {
                return new UsabilityRule(function (characterInfo, item) {
                    if (!characterPredicate(characterInfo)) {
                        return true;
                    }

                    return item.id != itemId;
                });
            };
            
            var isChiefPredicate = function (ch) { return ch.isChief; };
            var isMagePredicate = function (ch) { return ch.isMage; };

            return [
                heavyArmorCanBeUsedByProfessionsWithCertainCost,
                canBeUsedByCertainRaces,
                canHaveNoMoreThan2Weapons,
                createCertainCharacterCannotUseItem(isChiefPredicate, 60),
                createCertainCharacterCannotUseItem(isChiefPredicate, 61),
                createCertainCharacterCannotUseItem(isMagePredicate, 60),
                createCertainCharacterCannotUseItem(isMagePredicate, 61)
                ];

        }]);