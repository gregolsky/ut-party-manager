/*jslint browser: true */

window.angular.module('ut.core')
    .factory('Party', [

        function () {
            'use strict';

            var Party = function (name, nature, points) {
                this.name = name;
                this.nature = nature;
                this.points = points;
                this.members = [];
            };

            Party.prototype.removeCharacter = function (character) {
                var self = this,
                    members = self.members,
                    i = members.indexOf(character);
                
                if (i !== -1) {
                    members.splice(i, 1);
                }
            };
            
            Party.prototype.canAddMember = function () {
                return this.members.length <= 16;
            };
            
            Party.prototype.addMember = function (member) {
                if (!this.canAddMember()) {
                    throw "Cannot add another member.";
                }
                
                this.members.push(member);
            };
            
            Party.prototype.isValid = function (costCalculator) {
                return costCalculator.calculatePartyCost(this);
            };

            return Party;
        }]);