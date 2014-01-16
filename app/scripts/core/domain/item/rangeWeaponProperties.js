angular.module('ut.core')
    .factory('RangedWeaponProperties', [
        'ItemType',
        function (ItemType) {
            'use strict';

            var RangedWeaponProperties = function () {
                var self = this;

                self.canBeUsedBy = function (character, item) {
                    var eq = character.equipment;

                    if (_.some(eq, function (x) {
                        return x.id == self.id;
                    })) {
                        return false;
                    }

                    if (_.some(eq, function (x) {
                        return x.isOneOf(ItemType.RangedWeapon, ItemType.MeleeWeapon, ItemType.Shield);
                    })) {

                        return false;
                    }

                    return true;
                };
            };

            return RangedWeaponProperties;
        }]);