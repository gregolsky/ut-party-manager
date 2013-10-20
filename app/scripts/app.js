'use strict';

angular.module('utPartyManagerApp', [
  'ngRoute',
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ngAnimate'
])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
