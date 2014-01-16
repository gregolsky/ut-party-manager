angular.module('ut.core')
    .factory('ItemType', [

            function () {
            'use strict';

            return {
                Helmet: 1,
                Armor: 2,
                Shield: 3,
                Greaves: 4,
                MeleeWeapon: 5,
                RangedWeapon: 6
            };
}]);