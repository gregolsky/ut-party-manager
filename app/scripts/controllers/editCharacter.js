function EditCharacterController($scope, $q, ItemType, usabilityDeterminator, racesProvider, professionsProvider, avatars, cssHelper) {
    'use strict';

    $scope.character = $scope.context.character;
    $scope.chooseAvatarMode = false;
    $scope.ItemType = ItemType;
    $scope.avatars = [];

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

    var loadAvatars = function (onAvLoaded) {

        var loadAv = function (a) {
            var q = $q.defer();

            var img = new Image();

            img.onload = function () {
                q.resolve(a);
            };

            img.src = cssHelper.getBackgroundImageUrl('.' + a);

            return q.promise;
        };
        
        _.each(avatars, function (av) {
            loadAv(av).then(onAvLoaded);
        });
    };

    $scope.showAvailableAvatars = function () {

        loadAvatars(function(av) {
           $scope.avatars.push(av); 
        });

        $scope.chooseAvatarMode = true;
    };

    $scope.chooseAvatar = function (imgPath) {
        $scope.character.portrait = imgPath;
        $scope.chooseAvatarMode = false;
    };
    
    var dropUnusableItemsIfValueChanged = function (newValue, oldValue) {
        if (newValue == oldValue) {
            return;
        }

        $scope.character.dropUnusableItems(usabilityDeterminator, $scope.getActiveParty());
    };

    $scope.$watch('character.profession', dropUnusableItemsIfValueChanged);
    $scope.$watch('character.race', dropUnusableItemsIfValueChanged);
}

EditCharacterController.$inject = ['$scope', '$q', 'ItemType', 'usabilityDeterminator', 'racesProvider', 'professionsProvider', 'avatars', 'cssHelper'];