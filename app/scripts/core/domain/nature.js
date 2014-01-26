angular.module('ut.core')
    .factory('Nature', [
        function () {
            'use strict';
            var Nature = function (id, name) {
                this.id = id;
                this.name = name;
            };
            
            Nature.prototype.getAvailableNatures = function () {
                return [ this.id ];  
            };

            return Nature;
}]);