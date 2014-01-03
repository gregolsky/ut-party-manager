angular.module('ut.core')
    .factory('Profession', [
        function () {

                var Profession = function (id, name, cost, talent) {
                    this.id = id;
                    this.name = name;
                    this.cost = cost;
                    this.talent = talent;
                };
            
            return Profession;
        }]);