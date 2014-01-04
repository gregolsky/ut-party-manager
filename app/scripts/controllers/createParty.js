
function CreatePartyController($scope, $location, partyManager) {

    $scope.createParty = function () {
        try {
            $scope.party.members = [];
            partyManager.save($scope.party)
                .then(function (party) {
                    $scope.updatePartyList();
                    $location.path("/party/" + party.id);
                });
        } catch (error) {
            $location.path("/error");
        }
    };

};

CreatePartyController.$inject = ['$scope', '$location', 'party'];