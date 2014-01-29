function ImportPartyController($scope, $q) {
    'use strict';

    var readFile = function (file) {
        var q = $q.defer();
        var reader = new FileReader();

        reader.onloadend = function (evt) {
            q.resolve(evt.target.result);
        };

        reader.readAsText(file);

        return q.promise;
    };

    $scope.notifyImportError = function () {
        $scope.notifyDanger('Błąd importu', 'Niepoprawny format pliku.');
    };

    $scope.importParty = function ($files) {
        var file = $files[0];
        var json, party;

        var processFileContent = function (content) {
            if (!content) {
                $scope.notifyImportError();
                return;
            }

            try {
                party = angular.fromJson(content);
                party.id = null;
                $scope.saveParty(party);
            } catch (error) {
                console.error(error);
                $scope.notifyImportError();
            }
        };

        readFile(file)
            .then(processFileContent);
    };
}

ImportPartyController.$inject = ['$scope', '$q'];