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
                    
                    self.getContext = function () {
                        return self.canvas[0].getContext('2d');
                    };
                    
                    self.canvas.attr('width', $scope.width);
                    self.canvas.attr('height', $scope.height);
                }
            };

            return canvasMap;
   }]);