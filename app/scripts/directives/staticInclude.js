angular.module('ut.directives')
    .directive('staticInclude', function ($http, $templateCache, $compile) {
        'use strict';
        return function (scope, element, attrs) {

            var templatePath = attrs.staticInclude;

            $http.get(templatePath, {
                cache: $templateCache
            }).success(function (response) {
                var contents = $('<div/>').html(response).contents();
                element.html(contents);
                $compile(contents)(scope);
            });
        };
    });