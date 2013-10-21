angular.module('ut.calc', ['ut.constant.lookups']).factory('cost', ['racesLookup', 'professionsLookup', 'itemsLookup',
function(races, professions, items) {

	function CostCalculator(races, professions, items) {
		this.races = races;
		this.professions = professions;
		this.items = items;
	}


	CostCalculator.prototype.calculatePartyMemberCost = function(member, party) {
		var self = this;
		
        //var isInParty = _.indexOf(party.members, member);
        
		var sameProfMembers = _(party.members)
            .filter(function(x) { return x.profession == member.profession; })
            .value();
        
		var memberRank = _.indexOf(sameProfMembers, member);

		var cost = 0;
        if (member.race) {
		  cost += self.races[member.race].cost;
        }
        if (member.profession) {
		  cost += self.professions[member.profession].cost + (memberRank == -1 ? 0 : memberRank) * 10;
        }
        
        if (member.equipment){
            cost += (_.reduce(member.equipment, function(sum, itemId) {
                return sum + self.items[itemId].cost;
            }) || 0);
        }

		return cost;
	};

	CostCalculator.prototype.calculatePartyCost = function(party) {
		var self = this;
		var costs = _.map(party.members, function(x) {
			return self.calculatePartyMemberCost(x, party);
		})
		return _.reduce(costs, function(result, cost) {
			return result + cost;
		});
	};

	return new CostCalculator(races, professions, items);

}]); 