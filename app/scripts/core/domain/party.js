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
            var canBeMageProfessions = [ 2, 8, 10, 16, 17, 38 ];
            return
                this.chief != character.id &&
                _.some(canBeMageProfessions, function (x) {
                    return x == character.profession;
                });
        };
        
        Party.prototype.canBeChief = function (character) {
            
            var isNotBard = function (character) {
                return character.profession != 5;  
            };
            
            return this.mage != character.id &&
                isNotBard(character);
        };
        
        Party.prototype.addMember = function (member) {
            if (!this.canAddMember()) {
                throw "Cannot add another member.";
            }
            
            this.members.push(member);
        };
        
        Party.prototype.setChief = function (member) {
            if (!this.canBeChief(member)) {
                throw "This member cannot be a chief.";
            }
            
            this.chief = member.id;
        };
        
        Party.prototype.setMage = function (member) {
            if (!this.canBeMage(member)) {
                throw "This member cannot be a mage.";
            }
            
            this.mage = member.id;
        };
        
        Party.prototype.isChief = function (member) { 
            return this.chief == member.id; 
        };
        
        Party.prototype.isMage = function (member) { 
            return this.mage == member.id; 
        };
        
        Party.prototype.validate = function (partyValidator) {
              return partyValidator.validate(this);
        };
        
        Party.prototype.isValid = function (partyValidator) {
            return this.validate(partyValidator).length == 0;
        };
        
        return Party;
    }]);