
function CreatePartyController($scope, $location, Party, partyRepository) {
    'use strict';
    
    $scope.party = new Party('', null, 1000);
    
    $scope.createParty = function () {
        try {
            $scope.party.members = [];
            partyRepository.save($scope.party)
                .then(function (party) {
                    $scope.updatePartyList();
                    $location.path('/party/' + party.id);
                });
        } catch (error) {
            $location.path('/error');
        }
    };

};

CreatePartyController.$inject = ['$scope', '$location', 'Party', 'partyRepository'];