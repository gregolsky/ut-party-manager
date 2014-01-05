/*jslint browser: true */

var angular = window.angular;

window.angular.module('ut.backend')
    .run(function ($httpBackend, storageService) {
        'use strict';
        
		$httpBackend
            .whenGET(/^\/?party\/?\?id=[0-9]+/)
            .respond(function (method, url, data, headers) {
                var partyId = url.match(/^\/?party\/?\?id=([0-9]+)/)[1],
                    party = storageService.load('party', partyId);
                return [ 200, angular.toJson(party) ];
            });
            
        $httpBackend
            .when('GET', /^\/?party\/?/, '{"isArray":true}')
            .respond(function (method, url, data, headers) {
                var parties = storageService.list('party');
                return [ 200, angular.toJson(parties) ];
            });
            
		$httpBackend
            .whenPOST(/^\/?party\/?([0-9]+)?\/?/)
            .respond(function (method, url, data, headers) {
                var party = storageService.save('party', angular.fromJson(data));
                return [ 200, angular.toJson(party) ];
            });
        
		$httpBackend
            .whenDELETE(/^\/?party\/?\?id=[0-9]+/)
            .respond(function (method, url, data, headers) {
                var partyId = url.match(/^\/?party\/?\?id=([0-9]+)/)[1],
                    party = storageService.remove('party', partyId);
                return [ 200, angular.toJson(party) ];
            });
            
        $httpBackend
            .whenGET(/^views\//)
            .passThrough();
    });

