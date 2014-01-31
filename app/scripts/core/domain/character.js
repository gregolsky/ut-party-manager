angular.module('ut.core')
    .factory('Character', [
    'uuid',
    'itemsLookup',
    function (uuid, items) {
            'use strict';

            var Character = function () {
                this.id = uuid();
                this.name = null;
                this.profession = null;
                this.race = null;
                this.equipment = [];
                this.portrait = null;
            };

            Character.prototype.validate = function () {
                var result = [];

                if (!this.name) {
                    result.push("Imię jest wymagane.");
                }

                if (!this.race) {
                    result.push("Rasa jest wymagana.");
                }

                if (!this.profession) {
                    result.push("Profesja jest wymagana.");
                }

                if (!this.hasWeapon()) {
                    result.push("Postać musi mieć przynajmniej jedną broń.");
                }

                return result;
            };

            Character.prototype.isValid = function () {
                return this.validate().length == 0;
            };

            Character.prototype.getItems = function () {
                return _.map(this.equipment, function (itemId) {
                    return items[itemId];
                });
            };

            Character.prototype.hasWeapon = function () {
                return _.some(this.getItems(), function (item) {
                    return item.isWeapon() || item.isRangedWeapon();
                });
            };

            Character.prototype.dropUnusableItems = function (usabilityDeterminator, party) {
                var self = this;
                var oldEq = self.getItems();
                self.equipment = [];
                self.equipment = _(oldEq)
                    .filter(function (eqItem) {
                        return usabilityDeterminator.itemCanBeUsedBy(eqItem, self, party);
                    })
                    .map(function (item) {
                        return item.id; 
                    })
                    .value();
            };

            return Character;
    }]);