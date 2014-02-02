function DestroyPartyController($scope, $location, $modal, partyRepository) {
    'use strict';
    
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

            partyRepository.remove($scope.party)
                .then(function () {
                    $scope.updatePartyList();
                    $location.path('/');
                    $scope.notifyInfo("Drużyna zniszczona.", "Postacie nie żyją.");
                });
        });
    };

}

DestroyPartyController.$inject = ['$scope', '$location', '$modal', 'partyRepository'];