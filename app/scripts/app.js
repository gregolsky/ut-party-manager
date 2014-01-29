'use strict';

angular.module('utPartyManagerApp', [
  'ngRoute',
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ngAnimate',
  'ui.bootstrap',
  'angularFileUpload',
  'ut.core',
  'ut.core.constants',
  'ut.core.services',
  'ut.filters',
  'ut.services',
  'ut.directives',
  'ut.backend'
]).config(function ($compileProvider, $routeProvider) {
    
    $compileProvider.aHrefSanitizationWhitelist(/^\s*(https?|ftp|mailto|blob):/);
    
    $routeProvider
        .when('/', {
            templateUrl: 'views/home.html',
            controller: HomeController
        })
        .when('/party', {
            templateUrl: 'views/party/create.html',
            controller: CreatePartyController
        })
        .when('/party/:partyId', {
            templateUrl: 'views/party/manage.html',
            controller: ManagePartyController
        })
        .when('/notfound', {
            templateUrl: 'views/notfound.html'
        })
        .when('/error', {
            templateUrl: 'views/error.html'
        })
        .when('/about', {
            templateUrl: 'views/about.html'
        })
        .otherwise({
            redirectTo: '/'
        });
});