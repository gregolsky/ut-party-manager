"use strict";

function PartyCreatorController($scope, $location, $routeParams, session, lookups, lists, party, cost) {
    var self = this;

    self.locationService = $location;

    $scope.parties = party.list();

    $scope.lists = lists;

    $scope.lookups = lookups;

    $scope.isItemAWeapon = function (item) {
        if (item.id) {
            return $scope.isItemAWeapon(item.id);
        }
        
        return $scope.lookups.items[item].isWeapon();
    };

    $scope.isItemAnArmor = function (item) {
        if (item.id) {
            return $scope.isItemAnArmor(item.id);
        }        
        
        return $scope.lookups.items[item].isArmor();
    };

    $scope.isItemARangedWeapon = function (item) {
        if (item.id) {
            return $scope.isItemARangedWeapon(item.id);
        }
        
        return $scope.lookups.items[item].isRangedWeapon();
    };

    $scope.calcPartyCost = function (party) {
        return cost.calculatePartyCost.apply(cost, party);
    };

    $scope.calcMemberCost = function(member, party) {
        return cost.calculatePartyMemberCost(member, party);
    };

    $scope.changeActiveParty = function (partyId) {
        session.activePartId = partyId;
    };
}

PartyCreatorController.$inject = ['$scope', '$location', '$routeParams', 'session', 'lookups', 'lists', 'party', 'cost'];

function PartyListController($scope, $location, $routeParams) {

    $scope.activateParty = function (partyId) {
        $scope.changeActiveParty(partyId);
    };

}

PartyListController.$inject = ['$scope', '$location', '$routeParams'];


function ManagePartyController($scope, $routeParams, session, partyManager, costCalculator, model) {

    $scope.party = partyManager.get($routeParams.partyId);

    if ($routeParams.partyId) {
        $scope.changeActiveParty($routeParams.partyId);
    }

    $scope.action = 'list_characters';

    $scope.calcPartyCost = function () {
        return costCalculator.calculatePartyCost($scope.party);
    };
    
    $scope.calcMemberCostInParty = function(member) {
        return $scope.calcMemberCost(member, $scope.party);
    };
    
    $scope.editCharacter = function (character) {
        session.character = character;
        $scope.action = 'edit_character';
    };
    
    $scope.manageParty = function() {
        session.character = null;
        $scope.action = 'list_characters';
    };

    $scope.addCharacter = function () {
        var character = new model.Character();
        $scope.party.members.push(character);
        $scope.editCharacter(character);
    };
    
    $scope.managePartyState = {
        deleteMode: false
    };
    
    $scope.removeCharacter = function($event, character){
        $event.stopImmediatePropagation();
        
        var members = $scope.party.members;
        var i = members.indexOf(character);
        if (i != -1){
          members.splice(i, 1);   
        }
    }
}

ManagePartyController.$inject = ['$scope', '$routeParams', 'session', 'party', 'costCalculator', 'model'];


function HomeController($scope, $location, party) {

}

HomeController.$inject = ['$scope', '$location', 'party'];


function CreatePartyController($scope, $location, party) {
    var self = this;
    self.scope = $scope;
    self.locationService = $location;
    self.partyService = party;

    this.scope.createParty = function () {
        self.partyService.create(this.party, function success(data) {
            self.locationService.path("/party/edit/" + data.id);
        }, function error() {
            self.locationService.path("/error");
        });
    };

    return this;
}

CreatePartyController.$inject = ['$scope', '$location', 'party'];


function EditPartyController($scope, $location, $routeParams, party) {
    var self = this;

    $scope.party = party.get($routeParams.partyId);

    if ($routeParams.partyId) {
        $scope.changeActiveParty($routeParams.partyId);
    }
}

EditPartyController.$inject = ['$scope', '$location', '$routeParams', 'party'];


function EditCharacterController($scope, session, usability, avatars) {
    $scope.character = session.character;
    
    $scope.itemCanBeUsedByCharacter = function(item){
        return usability.itemCanBeUsedBy(item, $scope.character);
    };
    
    $scope.addItemToEquipment = function(item){
        $scope.character.equipment.push(item.id);
    };
    
    $scope.removeItemFromEquipment = function(itemId){
        var eq = $scope.character.equipment;
        var i = eq.indexOf(itemId);
        eq.splice(i, 1);
    };
    
    $scope.chooseAvatarMode = false;
    
    $scope.showAvailableAvatars = function(){
        $scope.avatars = avatars;
        $scope.chooseAvatarMode = true;
    }
    
    $scope.chooseAvatar = function(imgPath){
        $scope.character.img = imgPath;
        $scope.chooseAvatarMode = false;
    }
    
    function readdItemsToEquipment(character) {
        var oldEq = character.equipment;
        character.equipment = [];
        character.equipment = _.filter(oldEq, function(eqItemId){
            var item = $scope.lookups.items[eqItemId];
            return usability.itemCanBeUsedBy(item, character);
        });
    }
    
    $scope.$watch('character.profession', function(newValue, oldValue){
        readdItemsToEquipment($scope.character);
    });
}

EditCharacterController.$inject = ['$scope', 'session', 'usability', 'avatars'];

