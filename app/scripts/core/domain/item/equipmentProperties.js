angular.module('ut.core')
    .factory('EquipmentProperties', [
        'ItemType',
        function (ItemType) {
            'use strict';
            
            var EquipmentProperties = function () {};

            EquipmentProperties.prototype.canBeUsedBy = function (characterInfo, item) {
                var eq = characterInfo.equipment;

                if (_.some(eq, function (x) {
                    return x.id == self.id || x.isA(ItemType.Equipment);
                })) {
                    return false;
                }

                return true;
            };

            return EquipmentProperties;
        }]);