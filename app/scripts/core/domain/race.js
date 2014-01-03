angular.module('ut.core')
    .factory('Race', [
        function () {

            var Race = function (id, name, cost, natures, talent, attributes) {
                this.id = id;
                this.name = name;
                this.cost = cost;
                this.natures = natures;
                this.talent = talent;
                this.attributes = attributes;
            };

            return Race;
}]);