'use strict';

angular.module('ut.services', ['ut.core', 'ut.core.constants', 'ut.core.services', 'ngResource'])

.value('version', '0.1')

.factory('lookups', ['racesLookup', 'professionsLookup', 'itemsLookup',
    function (races, professions, items) {
        return {
            'races': races,
            'professions': professions,
            'items': items
        };
}])

.factory(
    'usability', ['racesLookup', 'professionsLookup', 'itemsLookup',
        function (races, professions, items) {

            var itemCanBeUsedBy = function (item, character) {
                var characterInfo = {
                    profession: professions[character.profession],
                    race: races[character.race],
                    equipment: _.map(character.equipment, function (x) {
                        return items[x];
                    })
                };

                return item.canBeUsedBy(characterInfo);
            }

            return {
                itemCanBeUsedBy: itemCanBeUsedBy
            };
}])



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
}])

.factory('avatars', [
    function () {
        return [
'armored-1',
'armored-2',
'armored-3',
'armored-4',
'armored-5',
'armored-6',
'cyberpunk-1',
'cyberpunk-2',
'cyberpunk-3',
'cyberpunk-4',
'cyberpunk-5',
'cyberpunk-6',
'cyberpunk-7',
'cyberpunk-8',
'cyberpunk-9',
'dwarf-1',
'dwarf-2',
'dwarf-3',
'dwarf-4',
'dwarf-5',
'dwarf-6',
'elf-1',
'elf-2',
'elf-3',
'elf-4',
'elf-5',
'elf-6',
'elf-7',
'elf-8',
'elf-9',
'gnome-1',
'gnome-2',
'hero-1',
'hero-2',
'hero-3',
'human-1',
'human-2',
'human-3',
'human-4',
'human-5',
'human-6',
'human-7',
'human-8',
'human-9',
'ithilid-1',
'mad-scientist-1',
'mad-scientist-2',
'manimal-1',
'manimal-2',
'manimal-3',
'manimal-4',
'manimal-5',
'manimal-6',
'manimal-7',
'manimal-8',
'manimal-9',
'pirate-1',
'pirate-2',
'pirate-3',
'pirate-4',
'pirate-5',
'pirate-6',
'pirate-7',
'robot-1',
'robot-2',
'robot-3',
'robot-4',
'robot-5',
'robot-6',
'robot-7',
'robot-8',
'robot-9',
'scary-1',
'scary-2',
'scary-3',
'scary-4',
'scary-5',
'scary-6',
'scary-7',
'steampunk-1',
'steampunk-2',
'steampunk-3',
'steampunk-4',
'steampunk-5',
'steampunk-6',
'steampunk-7',
'toon-1',
'troll-1',
'troll-2',
'troll-3',
'troll-4',
'troll-5',
'troll-6',
'troll-7',
'troll-8',
'troll-9',
'vampire-1',
'vampire-2',
'vampire-3',
'vampire-4',
'vampire-5',
'zombie-1',
'zombie-2',
'zombie-3',
'zombie-4',
'zombie-5',
'zombie-6',
'zombie-7'];
}]);