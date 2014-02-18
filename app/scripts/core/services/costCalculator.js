/*jslint browser: true */

angular.module('ut.core.services')
    .factory('costCalculator', [
        'lookups',
        'professionCostProvider',
        function (lookups, professionCostProvider) {
            "use strict";
            
            var CostCalculator = function () { };

            CostCalculator.prototype.calculatePartyMemberCost = function (member, party) {
                var self = this,
                    sameProfMembers,
                    professionRank,
                    cost = 0,
                    professionCost = 0;

                sameProfMembers = _(party.members)
                    .filter(function (x) {
                        return x.profession === member.profession;
                    })
                    .value();

                professionRank = _.indexOf(sameProfMembers, member);

                if (member.race) {
                    cost += lookups.races[member.race].cost;
                }
                
                if (member.profession && member.race) {
                    professionCost = professionCostProvider.getProfessionCostByRace(member.profession, member.race);
                    cost += professionCost + (professionRank === -1 ? 0 : professionRank) * 10;
                }
                
                if (party.chief == member.id) {
                    cost += Math.ceil(professionCost / 2)
                }

                if (member.equipment.length) {
                    
                    var items = member.getItems();
                    
                    var weaponCount = 0;
                    
                    cost += _.reduce(items, function (sum, item) {
                        
                        if (item.isWeapon()){
                            weaponCount += 1;
                        }
                        
                        return sum += item.cost * (weaponCount > 1 ? 3 : 1);
                    }, 0);
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