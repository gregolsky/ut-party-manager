angular.module('ut.directives')
    .directive('stampSheet', [
    '$q',
   function ($q) {
            'use strict';

            var canvasMap = {
                restrict: 'E',
                transclude: true,
                template: '<div><canvas></canvas><div ng-transclude/></div>',
                scope: {
                    width: '=width',
                    height: '=height'
                },
                controller: function ($scope, $element, $attrs, $transclude) {

                    var self = this;

                    self.canvas = $element.find('canvas');
                    self.paintQueue = [];
                    self.paintRequest = null;

                    var paintOnCanvas = function (canvas, paintQueue) {
                        
                        var q = $q.defer();
                        
                        canvas.width = canvas.width;

                        if (paintQueue.length == 0) {
                            return;
                        }

                        var context = canvas.getContext('2d');

                        var useNextPainter = function (paintQueue, index) {
                            
                            var painterDeferred = $q.defer();
                            
                            if (index == paintQueue.length) {
                                return;
                            }

                            var painter = paintQueue[index];

                            painter(context)
                                .then(function () {
                                    return useNextPainter(paintQueue, index + 1);
                                })
                                .then(function () {
                                    painterDeferred.resolve();
                                });
                            
                            return painterDeferred.promise;
                        }

                        useNextPainter(paintQueue, 0)
                            .then(function () {
                                q.resolve();  
                            });
                        
                        return q.promise;
                    };

                    self.paint = function () {

                        if (!$scope.width || !$scope.height) {
                            return;   
                        }
                        
                        if (self.paintRequest == null) {
                            self.paintRequest = paintOnCanvas(self.canvas[0], self.paintQueue);
                            return;
                        }

                        self.paintRequest.then(function () {
                            return paintOnCanvas(self.canvas[0], self.paintQueue);
                        });
                    };

                    self.addToQueue = function (painter) {
                        self.paintQueue.splice(0, 0, painter);
                    };

                    $scope.$watch('width', function (old, nu) {
                        if (old == nu) {
                            return;
                        }

                        self.canvas.attr('width', $scope.width);
                        self.paint();
                    });

                    $scope.$watch('height', function (old, nu) {
                        if (old == nu) {
                            return;
                        }

                        self.canvas.attr('height', $scope.height);
                        self.paint();
                    });
                }
            };

            return canvasMap;
   }]);