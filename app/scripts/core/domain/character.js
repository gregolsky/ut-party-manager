angular.module('ut.core')
.factory('Character', [
    'uuid',
    function (uuid) {
        'use strict';
        
        var Character = function() {
            this.id = uuid();
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