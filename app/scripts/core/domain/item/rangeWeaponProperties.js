angular.module('ut.core')
    .factory('RangedWeaponProperties', [
        'ItemType',
        function (ItemType) {
            var RangedWeaponProperties = function (dmg, range, isArmorPiercing) {
                            var self = this;
                            self.damage = dmg;
                            self.range = range;
                            self.isArmorPiercing = isArmorPiercing;
            
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







