function PrintPartyController($scope, $window) {
    'use strict';
    
    $scope.printParty = function () {
        var canvas = $window.document.querySelector('[party-card-render] canvas');
        var dataUrl = canvas.toDataURL('image/png');
        $window.open(dataUrl, '', '');
    };
}

PrintPartyController.$inject = ['$scope', '$window'];