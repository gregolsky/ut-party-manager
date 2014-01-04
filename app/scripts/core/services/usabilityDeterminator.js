angular.module('ut.core.services')
.factory(
    'usabilityDeterminator', ['racesLookup', 'professionsLookup', 'itemsLookup',
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
