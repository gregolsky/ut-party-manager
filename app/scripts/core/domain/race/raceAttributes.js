angular.module('ut.core')
    .factory('RaceAttributes', [
        function () {
            
            var RaceAttributes = function (
                command,
                mobility,
                normalCombat,
                strength,
                condition,
                rangeWeapons,
                toughness,
                vitality) {
                this.command = command;
                this.mobility = mobility;
                this.normalCombat = normalCombat;
                this.strength = strength;
                this.condition = condition;
                this.rangeWeapons = rangeWeapons;
                this.toughness = toughness;
                this.vitality = vitality;
            };
            
            return RaceAttributes;
            
        }]);