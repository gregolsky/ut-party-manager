function CardRenderingController($scope, imageLoaded) {
    'use strict';

    var FieldCoords = function (x, y, maxWidth) {
        this.x = x;
        this.y = y;
        this.maxWidth = maxWidth || null;
    };

    var buildCoords = function (x, y, maxWidth) {
        return new FieldCoords(x, y, maxWidth);
    };

    $scope.partyCardImage = {
        src: '/images/party-card.jpg',
        width: 0,
        height: 0
    };

    $scope.partyFields = {
        name: buildCoords(20, 75),
        nature: buildCoords(460, 75),
        guild: buildCoords(1255, 75),
        points: buildCoords(1550, 75)
    };

    imageLoaded($scope.partyCardImage.src)
        .then(function (image) {
            $scope.partyCardImage.width = image.width;
            $scope.partyCardImage.height = image.height;
        });

}

CardRenderingController.$inject = ['$scope', 'imageLoader'];