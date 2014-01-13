angular.module('ut.core')
.factory('uuid', [
    function () {
        'use strict';
        
        var s4, guid;
        
        s4 = function () {
            return Math.floor((1 + Math.random()) * 0x10000)
            .toString(16)
            .substring(1);
        };
        
        guid = function () {
            return s4() + s4() + '-' + s4() + '-' + s4() + '-' +
                s4() + '-' + s4() + s4() + s4();
        };
        
        return guid;
    }]);