angular.module('ut.directives')
    .directive('stampSheet', [

   function () {
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
                    
                    var paint = function () {
                        var canvas = self.canvas[0];
                        canvas.width = canvas.width;
                        var context = canvas.getContext('2d');
                        
                        _.forEach(self.paintQueue, function (painter) {
                            painter(context);
                        });
                    };
                    
                    self.addToQueue = function (painter) {
                        self.paintQueue.push(painter);
                    };
                    
                    $scope.$watch('width', function (old, nu) {
                        if (old == nu) {
                            return;    
                        }
                        
                        self.canvas.attr('width', $scope.width);
                        paint();
                    });
                    
                    $scope.$watch('height', function (old, nu) {
                        if (old == nu) {
                            return;    
                        }
                        
                        self.canvas.attr('height', $scope.height);
                        paint();
                    });                    
                }
            };

            return canvasMap;
   }]);