function AddCharacterController($scope, Character) {
    'use strict';

    $scope.addCharacter = function () {
        var character = new Character();
        $scope.party.addMember(character);
        $scope.editCharacter(character);
    };

}

AddCharacterController.$inject = ['$scope', 'Character'];