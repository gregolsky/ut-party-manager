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
                    width: '=width',
                    height: '=height',
                    start: '=start',
                    end: '=end'
                },
                link: function ($scope, $element, $attrs, stampSheet) {

                    var drawOn = function (context) {
                        return function (image) {
                            var start = $scope.start || { x: $scope.x, y: $scope.y };
                            var end = $scope.end;
                            var width = $scope.width;
                            var height = $scope.height;
                            
                            if (!width) { 
                                width = end ? end.x - start.x : image.width;
                            }
                            
                            if (!height) { 
                                height = end ? end.y - start.y : image.height;
                            }
                            
                            context.drawImage(image, 0, 0, image.width, image.height, start.x, start.y, width, height);
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