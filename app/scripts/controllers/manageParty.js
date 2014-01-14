function ManagePartyController($scope, $routeParams, $window, $location, $modal, partyManager, costCalculator, Character) {
    'use strict';

    var partyId = $routeParams.partyId;

    if (partyId) {
        $scope.changeActiveParty($routeParams.partyId);

        partyManager.get(partyId)
            .then(function (party) {
                $scope.party = party;
            });
    }

    $scope.state = {
        deleteMode: false,
        chiefSelection: false,
        mageSelection: false,
        action: 'list_characters'
    };

    $scope.calcPartyCost = function () {
        return costCalculator.calculatePartyCost($scope.party);
    };

    $scope.calcMemberCost = function (member) {
        return costCalculator.calculatePartyMemberCost(member, $scope.party);
    };

    $scope.editCharacter = function (character) {
        $scope.context.character = character;
        $scope.state.action = 'edit_character';
    };

    $scope.manageParty = function () {
        $scope.context.character = null;
        $scope.state.action = 'list_characters';
    };

    $scope.addCharacter = function () {
        var character = new Character();
        $scope.party.addMember(character);
        $scope.editCharacter(character);
    };

    $scope.saveChanges = function () {
        partyManager.save($scope.party);
        $scope.updatePartyList();
        $scope.notifyInfo('Drużyna zapisana pomyślnie!', 'Wszystkie wprowadzone zmiany zostały zapisane.');
    };

    $scope.applyCurrentAction = function ($event, character) {
        $event.stopImmediatePropagation();

        if ($scope.state.deleteMode) {
            $scope.party.removeCharacter(character);
        }

        if ($scope.state.chiefSelection) {
            $scope.party.setChief(character);
        }

        if ($scope.state.mageSelection) {
            $scope.party.setMage(character);
        }
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

    $scope.destroyParty = function () {

        var DestroyPartyConfirmController = function ($scope, $modalInstance) {

            $scope.ok = function () {
                $modalInstance.close(true);
            };

            $scope.cancel = function () {
                $modalInstance.close(false);
            };

        };

        DestroyPartyConfirmController.$inject = ['$scope', '$modalInstance'];

        var confirm = $modal.open({
            templateUrl: 'views/modals/destroyPartyConfirm.html',
            controller: DestroyPartyConfirmController
        });

        confirm.result.then(function (result) {
            if (!result) {
                return false;
            }

            partyManager.remove($scope.party)
                .then(function () {
                    $scope.updatePartyList();
                    $location.path('/');
                    $scope.notifyInfo("Drużyna zniszczona.", "Postacie nie żyją.");
                });
        });
    };

    $scope.printParty = function () {
        var canvas = $window.document.querySelector('[party-card-render] canvas');
        var dataUrl = canvas.toDataURL('image/png');
        $window.open(dataUrl, '', '');
    };

    $scope.isPartyValid = function () {
        if ($scope.party.isValid === undefined) {
            return true;
        }

        return $scope.party.isValid(costCalculator);
    };

    $scope.$watch('isPartyValid()', function (newValue, oldValue) {
        if (!newValue) {
            $scope.notifyDanger('Przegiąłeś!', 'Zużyłeś zbyt wiele punktów. Napraw problem i zapisz drużynę.');
        }
    });
}

ManagePartyController.$inject = ['$scope', '$routeParams', '$window', '$location', '$modal', 'partyManager', 'costCalculator', 'Character'];