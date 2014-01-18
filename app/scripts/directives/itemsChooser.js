angular.module('ut.directives')
    .directive('itemsChooser', [

   function () {
            'use strict';

            return {
                restrict: 'E',
                controller: 'ChooseItemsController',
                scope: {
                    itemFilter: '=itemFilter',
                    character: '=character',
                    displayType: '=displayType'
                },
                transclude: true,
                templateUrl: 'views/templates/items-chooser.html'
            };
   }
]);