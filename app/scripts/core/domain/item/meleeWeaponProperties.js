angular.module('ut.core')
    .factory('MeleeWeaponProperties', [
        'ItemType',
        function (ItemType) {

            var MeleeWeaponProperties = function (isTwoHanded, isLightweight) {
                var self = this;

                self.isTwoHanded = isTwoHanded;
                self.isLight = isLightweight;

                self.canBeUsedBy = function (character, item) {
                    var eq = character.equipment;

                    if (_.some(eq, function (x) {
                        return x.id == self.id;
                    })) {
                        return false;
                    }

                    if (_.some(eq, function (x) {
                            return x.isA(ItemType.MeleeWeapon) && x.properties.isTwoHanded;
                        }) ||
                        _.filter(eq, function (x) {
                            return x.isOneOf(ItemType.RangedWeapon, ItemType.MeleeWeapon, ItemType.Shield);
                        }).length > 1) {
                        return false;
                    }

                    if (self.isTwoHanded) {
                        if (_.some(eq, function(x) { return x.isA(ItemType.Shield); })) {
                            return false;
                        }

                        if (_.some(eq, function(x) { return x.isA(ItemType.MeleeWeapon); })) {
                            return false;
                        }
                    }

                    if (self.isLightweight && _.some(eq, function(x) { return x.isA(ItemType.Shield); })) {
                        return false;
                    }

                    return true;
                };
            };

            return MeleeWeaponProperties;
        }]);