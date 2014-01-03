angular.module('ut.core')
    .factory('Item', [
        'ItemType',
        function (ItemType) {

            function Item(id, name, type, cost, properties) {
                var self = this;
                self.id = id;
                self.name = name;
                self.type = type;
                self.cost = cost;
                self.properties = properties;
            }

            Item.prototype.isWeapon = function () {
                return this.type == ItemType.MeleeWeapon || this.type == ItemType.RangedWeapon;
            };

            Item.prototype.isRangedWeapon = function () {
                return this.type == ItemType.RangedWeapon;
            };

            Item.prototype.isArmor = function () {
                return this.type == ItemType.Helmet || this.type == ItemType.Shield || this.type == ItemType.Greaves || this.type == ItemType.Armor;
            };

            Item.prototype.isA = function (itemType) {
                return this.type == itemType;
            };

            Item.prototype.isOneOf = function () {
                var self = this;
                return _.some(arguments, function (type) {
                    return type == self.type;
                });
            };

            Item.prototype.canBeUsedBy = function (character) {
                var self = this;

                if (_.some(character.equipment, function (x) {
                    return x.id == self.id;
                })) {
                    return false;
                }

                return self.properties.canBeUsedBy(character, self);
            };



            return Item;
}]);