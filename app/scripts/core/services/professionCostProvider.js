angular.module('ut.core.services')
    .factory('professionCostProvider', [
        'professionCosts',
        function (professionCosts) {
            
            var getProfessionCostByRace = function (professionId, raceId) {
                var cost = professionCosts[professionId];  
                if (cost instanceof Object) {
                    return costs[raceId];   
                }
                
                return cost;
            };
            
            return {
                getProfessionCostByRace: getProfessionCostByRace  
            };
        }]);