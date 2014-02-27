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
                    height: '=height',
                    start: '=start',
                    end: '=end'
                },
                link: function ($scope, $element, $attrs, stampSheet) {

                    var drawOn = function (context) {
                        return function (image) {
                            var coords = $scope.coords || { x: $scope.x, y: $scope.y };
                            if ($scope.width && $scope.height) {
                                context.drawImage(image, coords.x, coords.y, $scope.width, $scope.height);
                            } else if ($scope.start && $scope.end) {
                                var start = $scope.start,
                                    end = $scope.end;
                                context.drawImage(image, 0, 0, image.width, image.height, start.x, start.y, end.x - start.x, end.y - start.y);
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