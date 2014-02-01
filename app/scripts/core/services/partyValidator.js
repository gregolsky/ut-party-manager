angular.module('ut.core')
    .factory('partyValidator', [
        'costCalculator',
        function (costCalculator) {

            var PartyValidationRule = function (messageKey, check) {
                this.messageKey = messageKey;
                this.check = check;
            }

            var PartyValidator = function (rules) {
                this.rules = rules;
            };

            PartyValidator.prototype.validate = function (party) {
                return _(this.rules)
                    .map(function (rule) {
                        return rule.check(party) ?
                            null :
                            rule.message;
                    })
                    .compact()
                    .value();
            };
            
            var costCannotBeGreaterThanPoints = new PartyValidationRule(
                'costCannotBeGTPoints',
                function (party) {
                    return costCalculator.calculatePartyCost(party) <= party.points;
                });

            return new PartyValidator([
               costCannotBeGreaterThanPoints 
            ]);
        }]);