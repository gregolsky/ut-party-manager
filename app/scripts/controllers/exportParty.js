function ExportController($scope, $window){
    'use strict';
    
    $scope.exportUrl = null;
    $scope.fileName = $scope.party.name + '.ut';
    
    $scope.refreshExportUrl = function () {
        var party = $scope.party;
        var blob = new Blob([ angular.toJson(party) ], { type: 'application/octet-binary' });
        $scope.exportUrl = $window.URL.createObjectURL(blob);
    };
};

ExportController.$inject = [ '$scope', '$window' ];