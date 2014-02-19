angular.module('ut.core')
    .factory('Profession', [
        function () {

                var Profession = function (id, name, talent) {
                    this.id = id;
                    this.name = name;
                    this.talent = talent;
                };
            
            return Profession;
        }]);