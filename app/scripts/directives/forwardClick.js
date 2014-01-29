angular.module('ut.directives')
    .directive('forwardClick', [
        '$document',
   function ($document) {
            'use strict';

            return {
                restrict: 'A',
                link: function (scope, element, attrs) {
                    var targetElementSelector = attrs.forwardClick;
                    var target = document.querySelector(targetElementSelector);
                    element.bind('click', function (){
                        target.click();
                    });
                }
            };
   }
]);