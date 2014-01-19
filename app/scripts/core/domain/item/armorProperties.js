angular.module('ut.core')
    .factory('ArmorProperties', [
        'ArmorClass',
        'ItemType',
        function (ArmorClass, ItemType) {
            'use strict';
            
            var ArmorProperties = function (armorClass) {
                var self = this;

                self.armorClass = armorClass;

                self.canBeUsedBy = function (character, item) {
                    var eq = character.equipment;

                    if (_.some(eq, function (x) {
                        return x.id == self.id;
                    })) {
                        return false;
                    }

                    if (item.isA(ItemType.Helmet) &&
                        _.some(eq, function (x) {
                            return x.isA(ItemType.Helmet);
                        })) {
                        return false;
                    }

                    if (item.isA(ItemType.Greaves) &&
                        _.some(eq, function (x) {
                            return x.isA(ItemType.Greaves);
                        })) {
                        return false;
                    }

                    if (item.isA(ItemType.Armor) &&
                        _.some(eq, function (x) {
                            return x.isA(ItemType.Armor);
                        })) {
                        return false;
                    }

                    if (item.isA(ItemType.Shield) &&
                        (_.some(eq, function (x) {
                                return x.isA(ItemType.Shield) || (x.isA(ItemType.MeleeWeapon) && (x.isTwoHanded || x.isLight));
                            }) ||
                            _.some(eq, function(x) { return x.isA(ItemType.MeleeWeapon); }))) {
                        return false;
                    }

                    if (self.armorClass == ArmorClass.Heavy) {
                        if (character.profession) {
                            return character.profession.cost > 30;
                        }
                    }

                    return true;
                };
            };
        
            return ArmorProperties;
        }]);