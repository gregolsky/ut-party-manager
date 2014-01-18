function MainController($scope, $location, $routeParams, lookups, lists, party, costCalculator, notificationService) {
    'use strict';
    
    var self = this;

    var ACTIVE_PARTY_CHANGED = 'activePartyChanged';
    var PARTY_LIST_CHANGED = 'partyListChanged';

    $scope.topMenuSelected = 'home';

    $scope.lists = lists;

    $scope.lookups = lookups;

    $scope.notifications = [];

    $scope.context = {};

    notificationService.setCollection($scope.notifications);

    var loadParties = function () {
        party.list()
            .then(function (data) {
                $scope.parties = data;
            });
    };

    $scope.changeActiveParty = function (partyId) {
        $scope.$emit(ACTIVE_PARTY_CHANGED, partyId);
    };

    $scope.updatePartyList = function () {
        $scope.$emit(PARTY_LIST_CHANGED);
    };

    $scope.notifyDanger = function (title, text) {
        notificationService.notifyDanger(title, text);
    };

    $scope.notifyInfo = function (title, text) {
        notificationService.notifySuccess(title, text);
    };

    $scope.$on(PARTY_LIST_CHANGED, function (e, args) {
        loadParties();
    });

    $scope.$on(ACTIVE_PARTY_CHANGED, function (e, partyId) {
        $scope.context.activePartyId = partyId;
    });

    loadParties();
}

MainController.$inject = [
    '$scope',
    '$location',
    '$routeParams',
    'lookups',
    'enumerations',
    'partyManager',
    'costCalculator',
    'notificationService'];