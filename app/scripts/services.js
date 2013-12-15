'use strict';

angular.module('ut.services', ['ut.model', 'ut.constant.lists', 'ut.constant.lookups', 'ut.calc', 'ngResource'])

.value('version', '0.1')

.factory('lookups', ['racesLookup', 'professionsLookup', 'itemsLookup',
    function (races, professions, items) {
        return {
            'races': races,
            'professions': professions,
            'items': items
        };
}])

.factory('costCalculator', ['cost',
    function (costCalculator) {
        return costCalculator;
}])

.factory('session', [
    function () {
        var sessionObject = {};
        return sessionObject;
}])

.factory(
    'usability', ['racesLookup', 'professionsLookup', 'itemsLookup',
        function (races, professions, items) {

            var itemCanBeUsedBy = function (item, character) {
                var characterInfo = {
                    profession: professions[character.profession],
                    race: professions[character.race],
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

.factory('avatars', [
    function () {
        return [
            'Armored_1',
            'Armored_2',
            'Armored_3',
            'Armored_4',
            'Armored_5',
            'Armored_6',
            'Cyberpunk_1',
            'Cyberpunk_2',
            'Cyberpunk_3',
            'Cyberpunk_4',
            'Cyberpunk_5',
            'Cyberpunk_6',
            'Cyberpunk_7',
            'Cyberpunk_8',
            'Cyberpunk_9',
            'Dwarf_1',
            'Dwarf_2',
            'Dwarf_3',
            'Dwarf_4',
            'Dwarf_5',
            'Dwarf_6',
            'Elf_1',
            'Elf_2',
            'Elf_3',
            'Elf_4',
            'Elf_5',
            'Elf_6',
            'Elf_7',
            'Elf_8',
            'Elf_9',
            'Gnome_1',
            'Gnome_2',
            'Hero_1',
            'Hero_2',
            'Hero_3',
            'Human_1',
            'Human_2',
            'Human_3',
            'Human_4',
            'Human_5',
            'Human_6',
            'Human_7',
            'Human_8',
            'Human_9',
            'Ithilid_1',
            'Mad_Scientist_1',
            'Mad_Scientist_2',
            'Manimal_1',
            'Manimal_2',
            'Manimal_3',
            'Manimal_4',
            'Manimal_5',
            'Manimal_6',
            'Manimal_7',
            'Manimal_8',
            'Manimal_9',
            'Pirate_1',
            'Pirate_2',
            'Pirate_3',
            'Pirate_4',
            'Pirate_5',
            'Pirate_6',
            'Pirate_7',
            'Robot_1',
            'Robot_2',
            'Robot_3',
            'Robot_4',
            'Robot_5',
            'Robot_6',
            'Robot_7',
            'Robot_8',
            'Robot_9',
            'Scary_1',
            'Scary_2',
            'Scary_3',
            'Scary_4',
            'Scary_5',
            'Scary_6',
            'Scary_7',
            'Steampunk_1',
            'Steampunk_2',
            'Steampunk_3',
            'Steampunk_4',
            'Steampunk_5',
            'Steampunk_6',
            'Steampunk_7',
            'Toon_1',
            'Troll_1',
            'Troll_2',
            'Troll_3',
            'Troll_4',
            'Troll_5',
            'Troll_6',
            'Troll_7',
            'Troll_8',
            'Troll_9',
            'Vampire_1',
            'Vampire_2',
            'Vampire_3',
            'Vampire_4',
            'Vampire_5',
            'Zombie_1',
            'Zombie_2',
            'Zombie_3',
            'Zombie_4',
            'Zombie_5',
            'Zombie_6',
            'Zombie_7'
            ];
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
                    console.log(arguments);
                    q.resolve(p);
                });

                return q.promise;
            },
            'get': function (id) {
                return PartyResource.get({
                    'id': id
                });
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