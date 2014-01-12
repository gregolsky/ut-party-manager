/*jslint browser: true */

var angular = window.angular,
    _ = window._;

angular.module('ut.services')
    .factory('partyManager', [
        '$q',
        '$resource',
        'Party',
        function ($q, $resource, Party) {
            'use strict';

            var PartyResource, service;
            
            PartyResource = $resource('/party/:partyId', {
                partyId: '@id'
            });

            service = {
                'save': function (party) {
                    var q = $q.defer();
                    var p = new PartyResource(party);

                    p.$save(function (p, req) {
                        q.resolve(p);
                    });

                    return q.promise;
                },
                'get': function (id) {
                    var q = $q.defer(),
                        resource,
                        party;

                    resource = PartyResource.get({
                        'id': id
                    }, function (party) {
                        party = angular.extend(new Party(), party);
                        q.resolve(party);
                    });

                    return q.promise;
                },
                'remove': function (party) {
                    var q = $q.defer();
                    if (!party.id) {
                        q.resolve();
                        return q.promise;
                    }

                    PartyResource.delete({
                        'id': party.id
                    }).$promise
                        .then(function () {
                            q.resolve();
                        });

                    return q.promise;
                },
                'list': function () {
                    var q = $q.defer();

                    PartyResource.query().$promise.then(function (data) {
                        var result = _.sortBy(data, function (x) {
                            return x.name.toUpperCase();
                        });

                        q.resolve(result);
                    });

                    return q.promise;
                }
            };

            return service;
}]);