'use strict';

angular.module('ut.services', ['ut.model', 'ut.constant.lists', 'ut.constant.lookups', 'ut.calc', 'ngResource'])

.value('version', '0.1')

.factory("lookups", ['racesLookup', 'professionsLookup', 'itemsLookup', function(races, professions, items){
	return {
		"races": races,
		"professions": professions,
		"items": items
	};
}])

.factory("costCalculator", ['cost', function(costCalculator){
	return costCalculator;
}])

.factory("session", [function(){
    var sessionObject = {};
	return sessionObject;
}])

.factory(
    'usability', 
    ['racesLookup', 'professionsLookup', 'itemsLookup', function(races, professions, items){
    
        var itemCanBeUsedBy = function(item, character) {
            var characterInfo = {
              profession: professions[character.profession],
              race: professions[character.race],    
              equipment: _.map(character.equipment, function(x){
                return items[x];  
              })
            };
            
            return item.canBeUsedBy(characterInfo);
        }
        
    return {
      itemCanBeUsedBy: itemCanBeUsedBy  
    };
}])
.factory("party", ['$resource', function($resource) {
	var PartyResource = $resource('/party/:partyId', {
		partyId : '@id'
	});
	
	var service = {
		'create' : function(party, successCb, errorCb) {
			var p = new PartyResource(party);
			p.$save(function(p, req) {
				successCb(p);
			});
		},
		'save' : function(party) {

		},
		'get' : function(id) {
			return PartyResource.get(
			{
				"id" : id
			});
		},
		'list' : function() {
			return PartyResource.query();
		}
	};

	return service;
}]);
