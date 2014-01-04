'use strict';

angular.module('ut.services', ['ut.core', 'ut.core.constants', 'ut.core.services', 'ngResource'])

.value('version', '0.1')

.factory('party', ['$q', '$resource',
    function ($q, $resource) {
        var PartyResource = $resource('/party/:partyId', {
            partyId: '@id'
        });

        var service = {
            'save': function (party) {
                var q = $q.defer();
                var p = new PartyResource(party);

                p.$save(function (p, req) {
                    q.resolve(p);
                });

                return q.promise;
            },
            'get': function (id) {
                return PartyResource.get({
                    'id': id
                });
            },
            'remove': function(party){
                var q = $q.defer();
                if (!party.id){
                    q.resolve();
                    return q.promise;
                }
                
                PartyResource.delete({ 'id': party.id }).$promise
                    .then(function(){
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