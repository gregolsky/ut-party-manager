angular.module('ut.directives')
    .directive('roundedRectStamp', [
    '$q',
   function ($q) {
            'use strict';

            CanvasRenderingContext2D.prototype.roundRect = function (x, y, width, height, radius) {
                
                if (radius === undefined) {
                    radius = 5;   
                }
                
                this.beginPath();
                this.moveTo(x + radius, y);
                this.lineTo(x + width - radius, y);
                this.quadraticCurveTo(x + width, y, x + width, y + radius);
                this.lineTo(x + width, y + height - radius);
                this.quadraticCurveTo(x + width, y + height, x + width - radius, y + height);
                this.lineTo(x + radius, y + height);
                this.quadraticCurveTo(x, y + height, x, y + height - radius);
                this.lineTo(x, y + radius);
                this.quadraticCurveTo(x, y, x + radius, y);
                this.closePath();
                
                this.stroke();
                this.fill();
                
            };

            var roundedRectStamp = {
                restrict: 'E',
                require: '^stampSheet',
                priority: 100,
                scope: {
                    start: '=start',
                    end: '=end',
                    stroke: '@stroke',
                    fill: '@fill'
                },
                link: function ($scope, $element, $attrs, stampSheet) {

                    var draw = function (context) {
                        var q = $q.defer();
                        
                        var prevFill = context.fillStyle, 
                            prevStroke = context.strokeStyle;
                        
                        context.fillStyle = $scope.fill;
                        context.strokeStyle = $scope.stroke;
                        
                        context.roundRect($scope.start.x, $scope.start.y, $scope.end.x - $scope.start.x, $scope.end.y - $scope.start.y);
                        
                        context.fillStyle = prevFill;
                        context.strokeStyle= prevStroke;
                        
                        q.resolve();
                        return q.promise;
                    };

                    stampSheet.addToQueue(draw);
                }
            };

            return roundedRectStamp;
   }]);