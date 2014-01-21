angular.module('ut.core')
    .factory('RangedWeaponProperties', [
        'ItemType',
        function (ItemType) {
            'use strict';
            var RangedWeaponProperties = function () { };
            return RangedWeaponProperties;
        }]);