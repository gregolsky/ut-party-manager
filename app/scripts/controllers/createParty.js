function CreatePartyController($scope, $location, Party, partyRepository) {
    'use strict';

    $scope.party = new Party('', null, 1000);

    $scope.createParty = function () {
        $scope.saveParty($scope.party);
    };

    $scope.saveParty = function (party) {
        try {
            partyRepository.save(party)
                .then(function (party) {
                    $scope.updatePartyList();
                    $location.path('/party/' + party.id);
                });
        } catch (error) {
            $scope.error();
        }
    }

};

CreatePartyController.$inject = ['$scope', '$location', 'Party', 'partyRepository'];