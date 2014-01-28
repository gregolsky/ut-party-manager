angular.module('ut.directives')
    .directive('forwardClick', [
        '$document',
   function ($document) {
            'use strict';

            return {
                restrict: 'A',
                link: function (scope, element, attrs) {
                    var target = document.querySelector(attrs.forwardClick);
                    angular.element(target)
                        .triggerHandler('click');
                }
            };
   }
]);