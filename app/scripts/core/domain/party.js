angular.module('ut.core')
    .factory("Party", [
        function () {
            var Party = function () {

            };

            Party.prototype.removeCharacter = function () {
                var self = this;
                var members = self.members;
                var i = members.indexOf(character);
                if (i != -1) {
                    members.splice(i, 1);
                }
            };
            
            return Party;
}]);