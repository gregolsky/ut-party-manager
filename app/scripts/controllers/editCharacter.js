
function EditCharacterController($scope, $q, ItemType, usabilityDeterminator, racesProvider, professionsProvider, avatars, cssHelper) {
    'use strict';

    $scope.character = $scope.context.character;
    $scope.chooseAvatarMode = false;
    $scope.ItemType = ItemType;

    $scope.getCharacter = function () {
        return $scope.character;
    };
    
    $scope.getAvailableRaces = function () {
        var party = $scope.getActiveParty();
        return racesProvider.getAvailableRaces(party);
    };
    
    $scope.getAvailableProfessions = function () {
        var party = $scope.getActiveParty();
        return professionsProvider.getAvailableProfessions(party);
    };
    
    $scope.isWeapon = function (item) {
        return item.isWeapon();
    };

    $scope.isArmor = function (item) {
        return item.isArmor();
    };

    $scope.isRangedWeapon = function (item) {
        return item.isRangedWeapon();
    };
    
    $scope.showAvailableAvatars = function () {
        
        var buildAv = function (a) {
            var q = $q.defer();
            
            var img = new Image();
            
            img.onload = function () {
                q.resolve();
            };
            
            img.src = cssHelper.getBackgroundImageUrl(a);
            
            return {
              promise: q.promise,
              clazz: a
            };
        };
        
        $scope.avatars = _.map(avatars, buildAv);
        
        $scope.chooseAvatarMode = true;
    };

    $scope.chooseAvatar = function (imgPath) {
        $scope.character.portrait = imgPath;
        $scope.chooseAvatarMode = false;
    };

    var readdItemsToEquipmentIfEligible = function (character) {
        var oldEq = character.equipment;
        character.equipment = [];
        character.equipment = _.filter(oldEq, function (eqItemId) {
            var item = $scope.lookups.items[eqItemId];
            return usabilityDeterminator.itemCanBeUsedBy(item, character, $scope.getActiveParty());
        });
    };
    
    $scope.$watch('character.profession', function (newValue, oldValue) {
        if (newValue == oldValue) {
            return;
        }
        
        readdItemsToEquipmentIfEligible($scope.character);
    });
}

EditCharacterController.$inject = ['$scope', '$q', 'ItemType', 'usabilityDeterminator', 'racesProvider', 'professionsProvider', 'avatars', 'cssHelper'];