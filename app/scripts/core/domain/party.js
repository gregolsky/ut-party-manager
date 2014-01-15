/*jslint browser: true */

window.angular.module('ut.core')
.factory('Party', [
    
    function () {
        'use strict';
        
        var Party = function (name, nature, points) {
            this.id = null;
            this.name = name;
            this.nature = nature;
            this.points = points;
            this.members = [];
            
            this.chief = null;
            this.mage = null;
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
        
        Party.prototype.canBeMage = function (character) {
            var canBeMageProfessions = [ 2, 8, 44 ];
            return _.some(canBeMageProfessions, function (x) {
                    return x == character.profession;
                });
        };
        
        Party.prototype.canBeChief = function (character) {
            return true;
        };
        
        Party.prototype.addMember = function (member) {
            if (!this.canAddMember()) {
                throw "Cannot add another member.";
            }
            
            this.members.push(member);
        };
        
        Party.prototype.setChief = function (member) {
            if (!this.canBeChief()) {
                throw "This member cannot be a chief.";
            }
            
            this.chief = member.id;
        };
        
        Party.prototype.setMage = function (member) {
            if (!this.canBeMage()) {
                throw "This member cannot be a mage.";
            }
            
            this.mage = member.id;
        };
        
        Party.prototype.isValid = function (costCalculator) {
            return costCalculator.calculatePartyCost(this) < this.points;
        };
        
        return Party;
    }]);