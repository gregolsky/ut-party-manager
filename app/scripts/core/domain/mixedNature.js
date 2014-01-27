angular.module('ut.core')
    .factory('MixedNature', [
   function () {
            var MixedNature = function (id, name, compositeNatures) {
                this.id = id;
                this.name = name;
                this.compositeNatures = compositeNatures;
            };

            MixedNature.prototype.getCompositeNatures = function () {
                return this.compositeNatures;
            };

            return MixedNature;
   }
]);