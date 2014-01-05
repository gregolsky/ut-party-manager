/*jslint browser: true */

window.angular.module('ut.core')
    .factory('Party', [

        function () {
            'use strict';

            var Party = function (name, nature, points) {
                this.name = name;
                this.nature = nature;
                this.points = points;
            };

            Party.prototype.removeCharacter = function (character) {
                var self = this,
                    members = self.members,
                    i = members.indexOf(character);
                
                if (i !== -1) {
                    members.splice(i, 1);
                }
            };

            return Party;
        }]);