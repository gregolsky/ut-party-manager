function ManagePartyController(
$scope, 
 $routeParams,   
 partyRepository, 
 costCalculator, 
 partyValidator,
 Character) {
    'use strict';

    var partyId = $routeParams.partyId;

    if (partyId) {
        $scope.changeActiveParty($routeParams.partyId);

        partyRepository.get(partyId)
            .then(function (party) {
                $scope.party = party;
            });
    }
    else {
        $scope.error();
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

    $scope.saveChanges = function () {
        partyRepository.save($scope.party);
        $scope.updatePartyList();
        $scope.notifyInfo('Drużyna zapisana pomyślnie!', 'Wszystkie wprowadzone zmiany zostały zapisane.');
    };

    $scope.isPartyValid = function () {
        if ($scope.party.isValid === undefined) {
            return true;
        }

        return $scope.party.isValid(partyValidator);
    };
    
    $scope.$watch('isPartyValid()', function (newValue, oldValue) {
        if (!newValue) {
            $scope.notifyDanger('Przegiąłeś!', 'Zużyłeś zbyt wiele punktów. Napraw problem i zapisz drużynę.');
        }
    });
}

ManagePartyController.$inject = [
    '$scope', 
    '$routeParams', 
    'partyRepository', 
    'costCalculator', 
    'partyValidator'
];