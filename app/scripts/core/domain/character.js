angular.module('ut.core')
    .factory('Character', [ function() {
      
        var Character = function() {
            this.name = null;
            this.profession = null;
            this.race = null;
            this.equipment = [];
            this.portait = null;
            this.skills = [];
            this.items = [];
        };
        
        return Character;
    }]);