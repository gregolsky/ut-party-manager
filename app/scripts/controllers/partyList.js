function PartyListController($scope, $location, $routeParams) {

    $scope.activateParty = function (partyId) {
        $scope.changeActiveParty(partyId);
    };

}

PartyListController.$inject = ['$scope', '$location', '$routeParams'];