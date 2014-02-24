function CardRenderingController($scope, imageLoaded) {
    'use strict';

    $scope.partyCardImage = {
        src: '/images/party-card.jpg',
        width: 0,
        height: 0
    };
    
    imageLoaded($scope.partyCardImage.src)
        .then(function (image) {
            $scope.partyCardImage.width = image.width;
            $scope.partyCardImage.height = image.height;
        });
    
}

CardRenderingController.$inject = [ '$scope', 'imageLoader' ];