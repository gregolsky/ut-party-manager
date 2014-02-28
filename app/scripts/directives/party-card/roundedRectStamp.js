angular.module('ut.directives')
    .directive('roundedRectStamp', [
    '$q',
   function ($q) {
            'use strict';

            CanvasRenderingContext2D.prototype.roundRect = function (x, y, width, height, radius, fill, stroke) {
                if (typeof stroke == "undefined") {
                    stroke = true;
                }
                if (typeof radius === "undefined") {
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
                if (stroke) {
                    this.stroke();
                }
                if (fill) {
                    this.fill();
                }
            };

            var roundedRectStamp = {
                restrict: 'E',
                require: '^stampSheet',
                priority: 100,
                scope: {
                    coords: '=coords',
                    bgColor: '=bgColor'
                },
                link: function ($scope, $element, $attrs, stampSheet) {

                    var draw = function (context) {
                        var q = $q.defer();
                        
                        //TODO
                        
                        q.resolve();
                        return q.promise;
                    };

                    stampSheet.addToQueue(draw);
                }
            };

            return textStamp;
   }]);