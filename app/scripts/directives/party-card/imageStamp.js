angular.module('ut.directives')
    .directive('imageStamp', [
    'imageLoader',
   function (imageLoaded) {
            'use strict';

            var imageStamp = {
                restrict: 'E',
                priority: 100,
                require: '^stampSheet',
                scope: {
                    src: '=src',
                    x: '=x',
                    y: '=y',
                    coords: '=coords',
                    width: '=width',
                    height: '=height'
                },
                link: function ($scope, $element, $attrs, stampSheet) {

                    var drawOn = function (context) {
                        return function (image) {
                            var coords = $scope.coords || { x: $scope.x, y: $scope.y };
                            if ($scope.width && $scope.height) {
                                context.drawImage(image, coords.x, coords.y, $scope.width, $scope.height);
                            } else {
                                context.drawImage(image, coords.x, coords.y, image.width, image.height);
                            }
                        };
                    };

                    stampSheet.addToQueue(function (context) {
                        return imageLoaded($scope.src)
                            .then(drawOn(context));
                    });
                    
                    $scope.$watch('src', function () {
                        stampSheet.paint();
                    });
                }
            };

            return imageStamp;
   }]);