
function EditCharacterController($scope, usabilityDeterminator, avatars) {
    $scope.character = $scope.context.character;

    $scope.itemCanBeUsedByCharacter = function (item) {
        return usabilityDeterminator.itemCanBeUsedBy(item, $scope.character);
    };

    $scope.addItemToEquipment = function (item) {
        $scope.character.equipment.push(item.id);
    };

    $scope.removeItemFromEquipment = function (itemId) {
        var eq = $scope.character.equipment;
        var i = eq.indexOf(itemId);
        eq.splice(i, 1);
    };

    $scope.chooseAvatarMode = false;

    $scope.showAvailableAvatars = function () {
        $scope.avatars = avatars;
        $scope.chooseAvatarMode = true;
    }

    $scope.chooseAvatar = function (imgPath) {
        $scope.character.portrait = imgPath;
        $scope.chooseAvatarMode = false;
    }

    function readdItemsToEquipmentIfEligible(character) {
        var oldEq = character.equipment;
        character.equipment = [];
        character.equipment = _.filter(oldEq, function (eqItemId) {
            var item = $scope.lookups.items[eqItemId];
            return usabilityDeterminator.itemCanBeUsedBy(item, character);
        });
    }
    
    $scope.$watch('character.profession', function (newValue, oldValue) {
        if (newValue == oldValue) {
            return;
        }
        
        readdItemsToEquipmentIfEligible($scope.character);
    });
}

EditCharacterController.$inject = ['$scope', 'usabilityDeterminator', 'avatars'];