angular.module('ut.directives')
    .directive('textStamp', [
    '$q',
   function ($q) {
            'use strict';

            var textStamp = {
                restrict: 'E',
                require: '^stampSheet',
                priority: 100,
                scope: {
                    text: '=text',
                    x: '=x',
                    y: '=y',
                    fontSize: '=fontSize'
                },
                link: function ($scope, $element, $attrs, stampSheet) {

                    var draw = function (context) {
                        var q = $q.defer();
                        context.font = ($scope.fontSize || 18) + "px Georgia";
                        context.fillText($scope.text, $scope.x, $scope.y);
                        q.resolve();
                        return q.promise;
                    };

                    stampSheet.addToQueue(draw);

                    $scope.$watch('text', function () {
                        stampSheet.paint();
                    });
                }
            };

            return textStamp;
   }]);