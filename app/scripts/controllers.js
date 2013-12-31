"use strict";

var ACTIVE_PARTY_CHANGED = 'activePartyChanged';
var PARTY_LIST_CHANGED = 'partyListChanged';

function MainController($scope, $location, $routeParams, lookups, lists, party, cost) {
    var self = this;

    $scope.topMenuSelected = 'home';
    
    $scope.lists = lists;

    $scope.lookups = lookups;
    
    $scope.context = {};
    
    var loadParties = function(){
        party.list()
            .then(function(data){
               $scope.parties = data; 
            });
    };

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

    $scope.calcMemberCost = function (member, party) {
        return cost.calculatePartyMemberCost(member, party);
    };

    $scope.changeActiveParty = function (partyId) {
        $scope.$emit(ACTIVE_PARTY_CHANGED, partyId);
    };
    
    $scope.updatePartyList = function () {
        $scope.$emit(PARTY_LIST_CHANGED);
    };
    
    $scope.$on(PARTY_LIST_CHANGED, function(e, args){
       loadParties();
    });
    
    $scope.$on(ACTIVE_PARTY_CHANGED, function(e, partyId) {
        $scope.context.activePartyId = partyId;
    });
    
    loadParties();
}

MainController.$inject = ['$scope', '$location', '$routeParams', 'lookups', 'lists', 'party', 'cost'];

function PartyListController($scope, $location, $routeParams) {

    $scope.activateParty = function (partyId) {
        $scope.changeActiveParty(partyId);
    };

}

PartyListController.$inject = ['$scope', '$location', '$routeParams'];


function ManagePartyController($scope, $routeParams, $location, partyManager, costCalculator, model) {

    var partyId = $routeParams.partyId;

    if (partyId) {
        $scope.changeActiveParty($routeParams.partyId);
        $scope.party = partyManager.get(partyId);
    }

    $scope.action = 'list_characters';

    $scope.calcPartyCost = function () {
        return costCalculator.calculatePartyCost($scope.party);
    };

    $scope.calcMemberCostInParty = function (member) {
        return $scope.calcMemberCost(member, $scope.party);
    };

    $scope.editCharacter = function (character) {
        $scope.context.character = character;
        $scope.action = 'edit_character';
    };

    $scope.manageParty = function () {
        $scope.context.character = null;
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

    $scope.saveChanges = function () {
        partyManager.save($scope.party);
        $scope.updatePartyList();
    };

    $scope.removeCharacter = function ($event, character) {
        $event.stopImmediatePropagation();

        var members = $scope.party.members;
        var i = members.indexOf(character);
        if (i != -1) {
            members.splice(i, 1);
        }
    }
    
    $scope.destroyParty = function () {
        if (!confirm("Czy jesteś pewien?")) {
            return;   
        }
        
        partyManager.remove($scope.party)
            .then(function(){
              $scope.updatePartyList();    
              $location.path('/');  
            });
        
        return false;
    }
}

ManagePartyController.$inject = ['$scope', '$routeParams', '$location', 'party', 'costCalculator', 'model'];


function HomeController($scope, $location, party) {

}

HomeController.$inject = ['$scope', '$location', 'party'];


function CreatePartyController($scope, $location, partyManager) {

    $scope.createParty = function () {
        try {
            $scope.party.members = [];
            partyManager.save($scope.party)
                .then(function (party) {
                    $scope.updatePartyList();
                    $location.path("/party/" + party.id);
                });
        } catch (error) {
            $location.path("/error");
        }
    };

};

CreatePartyController.$inject = ['$scope', '$location', 'party'];


function EditPartyController($scope, $location, $routeParams, party) {

    $scope.party = party.get($routeParams.partyId);

    if ($routeParams.partyId) {
        $scope.changeActiveParty($routeParams.partyId);
    }
}

EditPartyController.$inject = ['$scope', '$location', '$routeParams', 'party'];


function EditCharacterController($scope, usability, avatars) {
    $scope.character = $scope.context.character;

    $scope.itemCanBeUsedByCharacter = function (item) {
        return usability.itemCanBeUsedBy(item, $scope.character);
    };

    $scope.addItemToEquipment = function (item) {
        $scope.character.equipment.push(item.id);
    };

    $scope.removeItemFromEquipment = function (itemId) {
        var eq = $scope.character.equipment;
        var i = eq.indexOf(itemId);
        eq.splice(i, 1);
    };

    $scope.chooseAvatarMode = false;

    $scope.showAvailableAvatars = function () {
        $scope.avatars = avatars;
        $scope.chooseAvatarMode = true;
    }

    $scope.chooseAvatar = function (imgPath) {
        $scope.character.portrait = imgPath;
        $scope.chooseAvatarMode = false;
    }

    function readdItemsToEquipmentIfEligible(character) {
        var oldEq = character.equipment;
        character.equipment = _.filter(oldEq, function (eqItemId) {
            var item = $scope.lookups.items[eqItemId];
            return usability.itemCanBeUsedBy(item, character);
        });
    }
    
    $scope.$watch('character.profession', function (newValue, oldValue) {
        readdItemsToEquipmentIfEligible($scope.character);
    });
}

EditCharacterController.$inject = ['$scope', 'usability', 'avatars'];