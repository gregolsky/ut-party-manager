/*jslint browser: true */

angular.module('ut.core.services', ['ut.core.constants'])
    .factory('costCalculator', [
        'lookups',
        function (lookups) {
            "use strict";
            
            var CostCalculator = function (races, professions, items) {
                this.races = races;
                this.professions = professions;
                this.items = items;
            };

            CostCalculator.prototype.calculatePartyMemberCost = function (member, party) {
                var self = this,
                    sameProfMembers,
                    professionRank,
                    cost = 0;

                sameProfMembers = _(party.members)
                    .filter(function (x) {
                        return x.profession === member.profession;
                    })
                    .value();

                professionRank = _.indexOf(sameProfMembers, member);

                if (member.race) {
                    cost += self.races[member.race].cost;
                }

                if (member.profession) {
                    cost += self.professions[member.profession].cost + (professionRank === -1 ? 0 : professionRank) * 10;
                }

                if (member.equipment) {
                    cost += (_.reduce(member.equipment, function (sum, itemId) {
                        return sum + self.items[itemId].cost;
                    }) || 0);
                }

                return cost || 0;
            };

            CostCalculator.prototype.calculatePartyCost = function (party) {
                var self = this,
                    costs;
                
                costs = _.map(party.members, function (x) {
                    return self.calculatePartyMemberCost(x, party);
                });
                
                if (costs.length === 0) {
                    return 0;
                }
                
                return _.reduce(costs, function (result, cost) {
                    return result + cost;
                });
            };

            return new CostCalculator(lookups.races, lookups.professions, lookups.items);

        }]);