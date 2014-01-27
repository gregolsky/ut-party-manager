angular.module('ut.core')
    .factory('MixedNature', [
   function () {
            var MixedNature = function (id, name, availableNatures) {
                this.id = id;
                this.name = name;
                this.availableNatures = availableNatures;
            };

            MixedNature.prototype.getAvailableNatures = function () {
                return this.availableNatures;
            };

            return MixedNature;
   }
]);