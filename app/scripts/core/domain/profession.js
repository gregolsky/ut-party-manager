angular.module('ut.core')
    .factory('Profession', [
        function () {

            var trivialFilter = function () {
                return true;
            };

            var Profession = function (id, name, talent, raceFilter, natureFilter) {
                this.id = id;
                this.name = name;
                this.talent = talent;
                this.raceFilter = raceFilter || trivialFilter;
                this.natureFilter = natureFilter || trivialFilter;
            };

            return Profession;
        }]);