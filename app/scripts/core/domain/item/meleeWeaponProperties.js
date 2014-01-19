angular.module('ut.core')
    .factory('MeleeWeaponProperties', [
        'ItemType',
        function (ItemType) {

        var MeleeWeaponProperties = function (isTwoHanded, isLightweight) {
            var self = this;

            self.isTwoHanded = isTwoHanded;
            self.isLightweight = isLightweight;

        };

        MeleeWeaponProperties.prototype.canBeUsedBy = function (character, item) {
            var self = this;
            var eq = character.equipment;

            if (_.some(eq, function (x) {
                return x.id == self.id;
            })) {
                return false;
            }

            var hasTwoHandedMeleeWeapon = _.some(eq, function (x) {
                    return x.isA(ItemType.MeleeWeapon) && x.properties.isTwoHanded;
                });
            
            var hasRangedOrMeleeOrShield = _.some(eq, function (x) {
                    return x.isOneOf(ItemType.RangedWeapon, ItemType.MeleeWeapon, ItemType.Shield);
                });
            
            if (hasTwoHandedMeleeWeapon || hasRangedOrMeleeOrShield) {
                return false;
            }

            if (self.isTwoHanded) {
                var hasShield = _.some(eq, function (x) {
                    return x.isA(ItemType.Shield);
                });
                
                if (hasShield) {
                    return false;
                }

                if (_.some(eq, function (x) {
                    return x.isA(ItemType.MeleeWeapon);
                })) {
                    return false;
                }
            }

            if (self.isLightweight && _.some(eq, function (x) {
                return x.isA(ItemType.Shield);
            })) {
                return false;
            }

            return true;
        };

            return MeleeWeaponProperties;
}]);