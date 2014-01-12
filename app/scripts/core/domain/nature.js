angular.module('ut.core')
    .factory('Nature', [
        function () {
            'use strict';
            var Nature = function (id, name) {
                this.id = id;
                this.name = name;
            };

            return Nature;
}]);