function ListCharactersController($scope, $window, $modal, usabilityDeterminator) {
    'use strict';

    $scope.applyCurrentAction = function ($event, character) {
        $event.stopImmediatePropagation();

        if ($scope.state.deleteMode) {
            $scope.party.removeCharacter(character);
            $scope.state.deleteMode = false;
        }

        if ($scope.state.chiefSelection) {
            $scope.party.setChief(character);
            character.dropUnusableItems(usabilityDeterminator, $scope.party);
            $scope.state.chiefSelection = false;
        }

        if ($scope.state.mageSelection) {
            $scope.party.setMage(character);
            character.dropUnusableItems(usabilityDeterminator, $scope.party);
            $scope.state.mageSelection = false;
        }

        return;
    };

    $scope.canApplyCurrentAction = function (character) {
        if ($scope.state.deleteMode) {
            return true;
        }

        if ($scope.state.chiefSelection) {
            return $scope.party.canBeChief(character);
        }

        if ($scope.state.mageSelection) {
            return $scope.party.canBeMage(character);
        }

        return true;
    };

    $scope.isInSpecialMode = function () {
        var state = $scope.state;
        return state.deleteMode ||
            state.chiefSelection ||
            state.mageSelection;
    };

    $scope.toggleDeleteMode = function (arg) {
        $scope.state.deleteMode = arg;
    };

    $scope.toggleSelectionModeOff = function () {
        $scope.state.chiefSelection = false;
        $scope.state.mageSelection = false;
    };
}

ListCharactersController.$inject = ['$scope', '$window', '$modal', 'usabilityDeterminator', 'Character'];