'use strict';

angular.module('utPartyManagerApp', [
  'ngRoute',
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ngAnimate',
  'ngMockE2E',
  'ut.core',
  'ut.core.constants',
  'ut.core.services',
  'ut.filters',
  'ut.services',
  'ut.directives',
  'ut.backend'
]).config(function ($routeProvider) {
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