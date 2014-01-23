function ChooseItemsController($scope, itemsLookup, items, usabilityDeterminator, ItemType) {
    'use strict';

    var getPredicate, filter;
    
    $scope.ItemType = ItemType;
    
    getPredicate = function (itemFilter) {
        if ((typeof itemFilter) == 'function') {
            return itemFilter;
        }

        if ((typeof itemFilter) == 'number') {
            return function (item) {
                return item.type == itemFilter;
            };
        }

        return function () {
            return true;
        };
    };
    
    filter = getPredicate($scope.itemFilter);
    
    $scope.addItem = function (item) {
        $scope.character.equipment.push(item.id);
    };

    $scope.removeItem = function (item) {
        var eq = $scope.character.equipment;
        var i = eq.indexOf(item.id);
        eq.splice(i, 1);
    };

    $scope.getCharactersItems = function () {
        return _($scope.character.equipment)
            .map(function (itemId) {
                return itemsLookup[itemId];
            })
            .filter(filter)
            .value();
    };

    $scope.getUsableItems = function () {
        return _.filter(items, function (item) {
            return filter(item) && usabilityDeterminator.itemCanBeUsedBy(item, $scope.character, $scope.party);
        });
    };

};

ChooseItemsController.$inject = ['$scope', 'itemsLookup', 'items', 'usabilityDeterminator', 'ItemType'];