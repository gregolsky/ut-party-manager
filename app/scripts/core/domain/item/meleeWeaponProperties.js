angular.module('ut.core')
    .factory('MeleeWeaponProperties', [
        'ItemType',
        function (ItemType) {

            var MeleeWeaponProperties = function (normalAttackMod, strengthAttackMod, precisionAttackMod, counterAttack, isTwoHanded, isLight) {
                var self = this;
                self.normalAttackMod = normalAttackMod;
                self.strengthAttackMod = strengthAttackMod;
                self.precisionAttackMod = precisionAttackMod;
                self.counterAttack = counterAttack;
                self.isTwoHanded = isTwoHanded;
                self.isLight = isLight;

                self.canBeUsedBy = function (character, item) {
                    var eq = character.equipment;

                    if (_.some(eq, function (x) {
                        return x.id == self.id;
                    })) {
                        return false;
                    }

                    if (_.some(eq, function (x) {
                            return x.isA(ItemType.MeleeWeapon) && x.isTwoHanded;
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

                    if (self.isLight) {
                        if (_.some(eq, function(x) { return x.isA(ItemType.Shield); })) {
                            return false;
                        }
                    }

                    return true;
                };
            };

            return MeleeWeaponProperties;
        }]);