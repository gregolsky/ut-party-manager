angular.module('ut.core')
    .factory('ItemType', [
        function () {

            var _ItemType = function () {
                var self = this;
                self.Helmet = 1;
                self.Armor = 2;
                self.Shield = 3;
                self.Greaves = 4;
                self.MeleeWeapon = 5;
                self.RangedWeapon = 6;
            };

            var ItemType = new _ItemType();

            return ItemType;
}]);