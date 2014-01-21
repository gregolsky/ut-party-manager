angular.module('ut.core')
    .factory('MeleeWeaponProperties', [
        'ItemType',
        function (ItemType) {

            var MeleeWeaponProperties = function (isTwoHanded, isLightweight) {
                var self = this;

                self.isTwoHanded = isTwoHanded;
                self.isLightweight = isLightweight;

            };

            return MeleeWeaponProperties;
}]);