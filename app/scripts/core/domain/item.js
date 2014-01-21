angular.module('ut.core')
    .factory('Item', [
        'ItemType',
        'usabilityRules',
        function (ItemType, usabilityRules) {
                'use strict';

                var Item = function (id, name, type, cost, properties, races) {
                    var self = this;
                    self.id = id;
                    self.name = name;
                    self.type = type;
                    self.cost = cost;
                    self.properties = properties;
                    self.races = races;
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

                var checkTwoWay = function (rule, item1, item2) {
                    if (rule.idempotent) {
                        return rule.check(item1, item2);
                    }

                    return rule.check(item1, item2) && rule.check(item2, item1);
                };

                Item.prototype.canBeUsedWith = function (anotherItem) {
                    var self = this;
                    return _.every(usabilityRules, function (rule) {
                        return checkTwoWay(rule, self, anotherItem);
                    });
                };
        
                Item.prototype.canBeUsedBy = function (characterInfo) {
                    var self = this;

                    if (_.some(characterInfo.equipment, function (x) {
                        return x.id == self.id;
                    })) {
                        return false;
                    }
                    
                    if (self.races && 
                        self.races.length && 
                        !_.some(self.races, function (raceId) { return raceId == characterInfo.race.id; })) {
                        return false;   
                    }

                    if (!self.properties) {
                        return true;
                    }

                    return _.every(characterInfo.equipment, function (item) {
                       return item.canBeUsedWith(self); 
                    });
                };

            return Item;
        }]);