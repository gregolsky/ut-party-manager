angular.module('ut.directives')
    .directive('imageStamp', [
    'imageLoader',
   function (imageLoaded) {
            'use strict';

            var imageStamp = {
                restrict: 'E',
                require: '^stampSheet',
                scope: {
                    src: '=src',
                    x: '=x',
                    y: '=y',
                    width: '=width',
                    height: '=height'
                },
                link: function ($scope, $element, $attrs, stampSheet) {

                    var drawOn = function (context) {
                        return function (image) {
                            if ($scope.width && $scope.height) {
                                context.drawImage(image, $scope.x, $scope.y, $scope.width, $scope.height);
                            } else {
                                context.drawImage(image, $scope.x, $scope.y, image.width, image.height);
                            }
                        };
                    };

                    stampSheet.addToQueue(function (context) {
                        imageLoaded($scope.src)
                            .then(drawOn(context));
                    });
                }
            };

            return imageStamp;
   }]);