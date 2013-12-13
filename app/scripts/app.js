'use strict';

angular.module('utPartyManagerApp', [
  'ngRoute',
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ngAnimate',
  'ngMockE2E', 
  'ut.model', 
  'ut.constant.lists', 
  'ut.constant.lookups', 
  'ut.filters', 
  'ut.services', 
  'ut.directives', 
  'ut.backend'
])
  .config(function ($routeProvider) {
        $routeProvider
		.when('/', { templateUrl: 'views/home.html', controller: HomeController })
		.when('/party/new', { templateUrl: 'views/party/edit.html', controller: CreatePartyController })
		.when('/party/edit/:partyId', { templateUrl: 'views/party/edit.html', controller: EditPartyController })
		.when('/party/:partyId', { templateUrl: 'views/party/manage.html', controller: ManagePartyController })
		.when('/notfound', { templateUrl: 'views/notfound.html' })
		.when('/error', { templateUrl: 'views/error.html' })
		.otherwise({redirectTo: '/'});
  });
