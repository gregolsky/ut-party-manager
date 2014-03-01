function CardRenderingController($scope, imageLoaded, css) {
    'use strict';

    var FieldCoords = function (x, y, maxWidth) {
        this.x = x;
        this.y = y;
        this.maxWidth = maxWidth || null;
    };

    var buildCoords = function (x, y, maxWidth) {
        return new FieldCoords(x, y, maxWidth);
    };

    $scope.partyCardImage = {
        src: '/images/party-card.jpg',
        width: 0,
        height: 0
    };

    $scope.partyFields = {
        name: buildCoords(20, 75),
        nature: buildCoords(460, 75),
        guild: buildCoords(1255, 75),
        points: buildCoords(1550, 75)
    };

    var characterSections = [
             buildCoords(3, 125),
             buildCoords(3, 587),
             buildCoords(3, 1048),
             buildCoords(1034, 125),
             buildCoords(1034, 587),
             buildCoords(1034, 1048)
    ];

    var characterSectionFields = {
        name: buildCoords(24, 300),
        race: buildCoords(24, 353),
        profession: buildCoords(24, 406),
        raceSkill: buildCoords(335, 353),
        professionSkill: buildCoords(335, 406),
        ld: buildCoords(380, 35),
        m: buildCoords(380, 69),
        ws: buildCoords(380, 103),
        s: buildCoords(380, 137),
        sp: buildCoords(380, 171),
        bs: buildCoords(380, 205),
        t: buildCoords(380, 239),
        w: buildCoords(380, 273),
        weapon: buildCoords(437, 50),
        armor: buildCoords(437, 138),
        equipment: buildCoords(437, 225),
        psychology: buildCoords(592, 335),
        portraitStart: buildCoords(57, 10),
        portraitEnd: buildCoords(258, 248),
        pointsStart: buildCoords(216, 216),
        pointsEnd: buildCoords(254, 242),
        points: buildCoords(220, 235)
    };

    var adjustToCharacterSection = function (fieldsCoords, cardCoords) {
        return new FieldCoords(fieldsCoords.x + cardCoords.x, fieldsCoords.y + cardCoords.y);
    };

    var charactersCoords = _(characterSections)
        .map(function (section) {
            return _.mapValues(characterSectionFields, function (val) {
                return adjustToCharacterSection(val, section);
            });
        })
        .value();

    var itemsLookup = $scope.lookups.items;
    var racesLookup = $scope.lookups.races;
    var professionsLookup = $scope.lookups.professions;
    
    $scope.characterFields = function (index) {
        return charactersCoords[index];
    };

    $scope.race = function (character) {
        return racesLookup[character.race];
    };

    $scope.raceAttributes = function (character) {
        return racesLookup[character.race].attributes;
    };

    $scope.profession = function (character) {
        return professionsLookup[character.profession];
    };
    
    $scope.portrait = function (character) {
        return css.getBackgroundImageUrl('.' + (character.portrait || 'default'));
    };
    
    var describeFilteredEq = function (filter) {
        return function (character) {
            return _(character.equipment)
                .map(function (id) {
                    return itemsLookup[id];
                })
                .filter(filter)
                .map(function (x) {
                    return x.name;
                })
                .value()
                .join(", ");
        };
    };

    $scope.weapons = describeFilteredEq(function (x) {
        return x.isWeapon();
    });
    
    $scope.armor = describeFilteredEq(function (x) {
        return x.isArmor();
    });
    
    $scope.equipment = describeFilteredEq(function (x) {
        return x.isEquipment();
    });

    imageLoaded($scope.partyCardImage.src)
        .then(function (image) {
            $scope.partyCardImage.width = image.width;
            $scope.partyCardImage.height = image.height;
        });

}

CardRenderingController.$inject = ['$scope', 'imageLoader', 'cssHelper'];