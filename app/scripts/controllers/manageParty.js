
function ManagePartyController($scope, $routeParams, $window, $location, partyManager, costCalculator, Character) {

    var partyId = $routeParams.partyId;

    if (partyId) {
        $scope.changeActiveParty($routeParams.partyId);
        $scope.party = partyManager.get(partyId);
    }
    
    $scope.state = {
        deleteMode: false,
        action: 'list_characters'
    };

    $scope.calcPartyCost = function () {
        return costCalculator.calculatePartyCost($scope.party);
    };

    $scope.calcMemberCost = function (member) {
        return costCalculator.calculatePartyMemberCost(member, $scope.party);
    };

    $scope.editCharacter = function (character) {
        $scope.context.character = character;
        $scope.state.action = 'edit_character';
    };

    $scope.manageParty = function () {
        $scope.context.character = null;
        $scope.state.action = 'list_characters';
    };

    $scope.addCharacter = function () {
        var character = new Character();
        $scope.party.members.push(character);
        $scope.editCharacter(character);
    };

    $scope.saveChanges = function () {
        partyManager.save($scope.party);
        $scope.updatePartyList();
    };

    $scope.removeCharacter = function ($event, character) {
        $event.stopImmediatePropagation();
        $scope.party.removeCharacter();

    };
    
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
    };
    
    $scope.printParty = function () {
        var canvas = $window.document.querySelector('[party-card-render] canvas');
        var dataUrl = canvas.toDataURL('image/png');
        $window.open(dataUrl, '', '');

        return false;
    };
    
    $scope.canAddMember = function () {
          
    };
}

ManagePartyController.$inject = ['$scope', '$routeParams', '$window', '$location', 'partyManager', 'costCalculator', 'Character'];