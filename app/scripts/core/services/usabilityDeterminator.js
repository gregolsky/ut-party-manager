angular.module('ut.core.services')
.factory(
    'usabilityDeterminator', ['racesLookup', 'professionsLookup', 'itemsLookup',
        function (races, professions, items) {

            var itemCanBeUsedBy = function (item, character, party) {
                var characterInfo = {
                    profession: professions[character.profession],
                    race: races[character.race],
                    equipment: character.getItems(),
                    isChief: party.chief == character.id,
                    isMage: party.mage == character.id
                };
                
                var usabilityDeterminationContext = {
                    character: characterInfo,
                    party: party
                };

                return item.canBeUsedBy(usabilityDeterminationContext);
            }

            return {
                itemCanBeUsedBy: itemCanBeUsedBy
            };
}])
