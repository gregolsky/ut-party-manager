angular.module('ut.core')
    .factory('EquipmentProperties', [
        'ItemType',
        function (ItemType) {
            'use strict';
            
            var EquipmentProperties = function () {};

            return EquipmentProperties;
        }]);