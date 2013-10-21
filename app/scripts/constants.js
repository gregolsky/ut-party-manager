angular.module('ut.constant.lists', ['ut.model'])
    .factory('lists', ['model', function (ut) {

        var races = [{
                "id": 1,
                "name": "Elf leśny",
                "cost": 70,
                "availableNatures": ["D"],
                "attributes": {
                    "command": 7,
                    "mobility": 15,
                    "normalCombat": 7,
                    "strength": 7,
                    "condition": 8,
                    "rangeWeapons": 8,
                    "toughness": 7,
                    "vitality": 6
                },
                "talent": "Doskok"
 }, {
                "id": 2,
                "name": "Elf wyniosły",
                "cost": 70,
                "availableNatures": ["N"],
                "attributes": {
                    "command": 7,
                    "mobility": 15,
                    "normalCombat": 7,
                    "strength": 7,
                    "condition": 8,
                    "rangeWeapons": 8,
                    "toughness": 7,
                    "vitality": 6
                },
                "talent": "Doskok"
 }, {
                "id": 3,
                "name": "Elf dziki",
                "cost": 70,
                "availableNatures": ["N"],
                "attributes": {
                    "command": 7,
                    "mobility": 15,
                    "normalCombat": 7,
                    "strength": 7,
                    "condition": 8,
                    "rangeWeapons": 8,
                    "toughness": 7,
                    "vitality": 6
                },
                "talent": "Doskok"
 }, {
                "id": 4,
                "name": "Elf ciemny",
                "cost": 70,
                "availableNatures": ["Z"],
                "attributes": {
                    "command": 7,
                    "mobility": 15,
                    "normalCombat": 7,
                    "strength": 7,
                    "condition": 8,
                    "rangeWeapons": 8,
                    "toughness": 7,
                    "vitality": 6
                },
                "talent": "Doskok"
 }, {
                "id": 5,
                "name": "Krasnolud z Thargomind",
                "cost": 70,
                "availableNatures": ["N"],
                "attributes": {
                    "command": 7,
                    "mobility": 15,
                    "normalCombat": 7,
                    "strength": 8,
                    "condition": 6,
                    "rangeWeapons": 7,
                    "toughness": 8,
                    "vitality": 8
                },
                "talent": "Ogłuszanie"
 }, {
                "id": 6,
                "name": "Krasnolud z Północy",
                "cost": 73,
                "availableNatures": ["Z"],
                "attributes": {
                    "command": 7,
                    "mobility": 15,
                    "normalCombat": 7,
                    "strength": 8,
                    "condition": 6,
                    "rangeWeapons": 7,
                    "toughness": 8,
                    "vitality": 8
                },
                "talent": "Ogłuszanie"
 }, {
                "id": 7,
                "name": "Człowiek",
                "cost": 50,
                "availableNatures": ["D", "N", "Z"],
                "attributes": {
                    "command": 7,
                    "mobility": 15,
                    "normalCombat": 7,
                    "strength": 7,
                    "condition": 7,
                    "rangeWeapons": 7,
                    "toughness": 7,
                    "vitality": 7
                },
                "talent": "Instynkt obronny"
 }, {
                "id": 8,
                "name": "Ork",
                "cost": 60,
                "availableNatures": ["N", "Z"],
                "attributes": {
                    "command": 6,
                    "mobility": 15,
                    "normalCombat": 6,
                    "strength": 8,
                    "condition": 6,
                    "rangeWeapons": 6,
                    "toughness": 8,
                    "vitality": 7
                },
                "talent": "Brutalność"
 }, {
                "id": 9,
                "name": "Niziołek Krótkin",
                "cost": 40,
                "availableNatures": ["D"],
                "attributes": {
                    "command": 6,
                    "mobility": 20,
                    "normalCombat": 6,
                    "strength": 6,
                    "condition": 8,
                    "rangeWeapons": 7,
                    "toughness": 6,
                    "vitality": 5
                },
                "talent": "Braterstwo"
 }, {
                "id": 10,
                "name": "Niziołek Mrokin",
                "cost": 40,
                "availableNatures": ["Z"],
                "attributes": {
                    "command": 6,
                    "mobility": 20,
                    "normalCombat": 6,
                    "strength": 6,
                    "condition": 8,
                    "rangeWeapons": 7,
                    "toughness": 6,
                    "vitality": 5
                },
                "talent": "Braterstwo"
 }, {
                "id": 11,
                "name": "Goblin",
                "cost": 38,
                "availableNatures": ["N", "Z"],
                "attributes": {
                    "command": 6,
                    "mobility": 20,
                    "normalCombat": 6,
                    "strength": 6,
                    "condition": 8,
                    "rangeWeapons": 7,
                    "toughness": 6,
                    "vitality": 5
                },
                "talent": "Żywotność"
 }, {
                "id": 12,
                "name": "Hobgoblin",
                "cost": 45,
                "availableNatures": ["Z"],
                "attributes": {
                    "command": 6,
                    "mobility": 15,
                    "normalCombat": 6,
                    "strength": 7,
                    "condition": 7,
                    "rangeWeapons": 7,
                    "toughness": 6,
                    "vitality": 7
                },
                "talent": "Przeznaczenie"
 }, {
                "id": 13,
                "name": "Gnom",
                "cost": 36,
                "availableNatures": ["D"],
                "attributes": {
                    "command": 7,
                    "mobility": 15,
                    "normalCombat": 6,
                    "strength": 6,
                    "condition": 6,
                    "rangeWeapons": 8,
                    "toughness": 6,
                    "vitality": 7
                },
                "talent": "Wrodzona moc"
 }, {
                "id": 14,
                "name": "Półogr",
                "cost": 92,
                "availableNatures": ["D", "N"],
                "attributes": {
                    "command": 5,
                    "mobility": 10,
                    "normalCombat": 6,
                    "strength": 9,
                    "condition": 5,
                    "rangeWeapons": 5,
                    "toughness": 9,
                    "vitality": 9
                },
                "talent": "Twarda skóra"
 }, {
                "id": 15,
                "name": "Czarny ork",
                "cost": 79,
                "availableNatures": ["Z"],
                "attributes": {
                    "command": 5,
                    "mobility": 10,
                    "normalCombat": 6,
                    "strength": 9,
                    "condition": 5,
                    "rangeWeapons": 5,
                    "toughness": 8,
                    "vitality": 8
                },
                "talent": "Atak paszczą"
 }, {
                "id": 16,
                "name": "Tigerianin",
                "cost": 65,
                "availableNatures": ["D"],
                "attributes": {
                    "command": 6,
                    "mobility": 15,
                    "normalCombat": 6,
                    "strength": 8,
                    "condition": 8,
                    "rangeWeapons": 5,
                    "toughness": 7,
                    "vitality": 7
                },
                "talent": "Powalenie"
 }, {
                "id": 17,
                "name": "Vorak",
                "cost": 64,
                "availableNatures": ["N"],
                "attributes": {
                    "command": 6,
                    "mobility": 15,
                    "normalCombat": 7,
                    "strength": 7,
                    "condition": 8,
                    "rangeWeapons": 6,
                    "toughness": 7,
                    "vitality": 8
                },
                "talent": "Podstępny cios"
 }];

        var professions = [{
                "id": 1,
                "name": "Herszt",
                "cost": 70,
                "talent": "Wydawanie rozkazów"
 }, {
                "id": 2,
                "name": "Bard",
                "cost": 32,
                "talent": "Poetyckie kroniki"
 }, {
                "id": 3,
                "name": "Szermierz",
                "cost": 40,
                "talent": "Dwie bronie"
 }, {
                "id": 4,
                "name": "Barbarzyńca",
                "cost": 36,
                "talent": "Krzepa"
 }, {
                "id": 5,
                "name": "Zbrojny",
                "cost": 38,
                "talent": "Opancerzenie"
 }, {
                "id": 6,
                "name": "Strzelec",
                "cost": 26,
                "talent": "Strzał w ruchu"
 }, {
                "id": 7,
                "name": "Zabójca",
                "cost": 44,
                "talent": "Perfekcyjny atak"
 }, {
                "id": 8,
                "name": "Banita",
                "cost": 20,
                "talent": "Ucieczka"
 }, {
                "id": 9,
                "name": "Łapserdak",
                "cost": 12,
                "talent": ""
 }, {
                "id": 10,
                "name": "Palladyn",
                "cost": 65,
                "talent": "Aura inspiracji",
                "onlyForHumans": true
 }, {
                "id": 11,
                "name": "Rycerz zakonny",
                "cost": 65,
                "talent": "Zakonna determinacja",
                "onlyForHumans": true
 }, {
                "id": 12,
                "name": "Czarny rycerz",
                "cost": 65,
                "talent": "Aura śmierci",
                "onlyForHumans": true
 }, {
                "id": 13,
                "name": "Szampierz",
                "cost": 39,
                "talent": "Zamaszyste cięcie"
 }, {
                "id": 14,
                "name": "Zwiadowca",
                "cost": 28,
                "talent": "Skradanie"
 }, {
                "id": 15,
                "name": "Tropiciel",
                "cost": 32,
                "talent": "Znawca tropów"
 }, {
                "id": 16,
                "name": "Berserker",
                "cost": 40,
                "talent": "Furia"
 }, {
                "id": 17,
                "name": "Giermek",
                "cost": 18,
                "talent": "Odwrócenie uwagi"
 }, {
                "id": 18,
                "name": "Złodziej",
                "cost": 16,
                "talent": "Doliniarstwo"
 }, {
                "id": 19,
                "name": "Nożownik",
                "cost": 26,
                "talent": "Zasztyletowanie"
 }, {
                "id": 20,
                "name": "Hiena cmentarna",
                "cost": 16,
                "talent": "Znawca nekropolii"
 }, {
                "id": 21,
                "name": "Łowca nagród",
                "cost": 50,
                "talent": "Wielka szansa"
 }, {
                "id": 22,
                "name": "Mnich",
                "cost": 16,
                "talent": "Znawca świątyń"
 }, {
                "id": 23,
                "name": "Strażnik dróg",
                "cost": 16,
                "talent": "Terenoznawstwo"
 }, {
                "id": 24,
                "name": "Rozbójnik",
                "cost": 25,
                "talent": "Atak z zaskoczenia"
 }, {
                "id": 25,
                "name": "Gladiator",
                "cost": 36,
                "talent": "Słaby punkt"
 }, {
                "id": 26,
                "name": "Mistrz miecza",
                "cost": 47,
                "talent": "Perfekcja"
 }, {
                "id": 27,
                "name": "Zwadźca",
                "cost": 38,
                "talent": "Zastawa"
 }, {
                "id": 28,
                "name": "Czarodziej",
                "cost": 66,
                "talent": "Rzucanie czarów"
 }, {
                "id": 29,
                "name": "Kleryk",
                "cost": 60,
                "talent": "Modlitwy"
 }, {
                "id": 30,
                "name": "Kapłan",
                "cost": 74,
                "talent": "Święta walka"
 }, {
                "id": 31,
                "name": "Druid",
                "cost": 63,
                "talent": "Magiczny menhir"
 }, {
                "id": 32,
                "name": "Szaman",
                "cost": 62,
                "talent": "Rytuał"
 }, {
                "id": 33,
                "name": "Alchemik",
                "cost": 64,
                "talent": "Eliksiry"
 }];

        var Item = ut.Item;
        var ItemType = ut.ItemType;
        var MeleeWeaponProperties = ut.MeleeWeaponProperties;
        var ArmorProperties = ut.ArmorProperties;
        var RangedWeaponProperties = ut.RangedWeaponProperties;
        var ArmorClass = ut.ArmorClass;

        var items = [
         // Melee (normalAttackMod, strengthAttackMod, precisionAttackMod, counterAttack, isTwoHanded, isLight)

        new Item(1, "Miecz", ItemType.MeleeWeapon, 11, new MeleeWeaponProperties(1, 0, 0, false, false, false)),
        new Item(2, "Miecz krótki", ItemType.MeleeWeapon, 11, new MeleeWeaponProperties(1, 0, 0, false, false, false)),
        new Item(3, "Miecz półtoraręczny", ItemType.MeleeWeapon, 15, new MeleeWeaponProperties(1, 1, -1, false, true, false)),
        new Item(4, "Topór", ItemType.MeleeWeapon, 11, new MeleeWeaponProperties(0, 1, -2, false, false, false)),
        new Item(5, "Młot", ItemType.MeleeWeapon, 11, new MeleeWeaponProperties(0, 1, -2, false, false, false)),
        new Item(6, "Miecz dwuręczny", ItemType.MeleeWeapon, 20, new MeleeWeaponProperties(0, 2, -2, false, true, false)),
        new Item(7, "Topór dwuręczny", ItemType.MeleeWeapon, 20, new MeleeWeaponProperties(0, 2, -2, false, true, false)),
        new Item(8, "Młot dwuręczny", ItemType.MeleeWeapon, 20, new MeleeWeaponProperties(0, 2, -2, false, true, false)),
        new Item(9, "Sztylet", ItemType.MeleeWeapon, 5, new MeleeWeaponProperties(0, -3, 2, false, false, true)),
        new Item(10, "Nóż", ItemType.MeleeWeapon, 5, new MeleeWeaponProperties(0, -3, 2, false, false, true)),
        new Item(11, "Szabla", ItemType.MeleeWeapon, 14, new MeleeWeaponProperties(1, -1, 2, false, false, false)),
        new Item(12, "Rapier", ItemType.MeleeWeapon, 14, new MeleeWeaponProperties(1, -1, 2, false, false, false)),
        new Item(13, "Włócznia", ItemType.MeleeWeapon, 13, new MeleeWeaponProperties(1, -1, -1, true, false, false)),
        new Item(14, "Halabarda", ItemType.MeleeWeapon, 17, new MeleeWeaponProperties(1, -1, -1, true, true, false)),
        new Item(15, "Kostur", ItemType.MeleeWeapon, 5, new MeleeWeaponProperties(0, 0, -2, false, false, false)),
        new Item(16, "Maczuga", ItemType.MeleeWeapon, 5, new MeleeWeaponProperties(0, 0, -2, false, false, false)),
        new Item(17, "Pałka", ItemType.MeleeWeapon, 5, new MeleeWeaponProperties(0, 0, -2, false, false, false)),
        new Item(18, "Widły", ItemType.MeleeWeapon, 5, new MeleeWeaponProperties(0, 0, -2, false, false, false)),
        new Item(19, "Kij", ItemType.MeleeWeapon, 5, new MeleeWeaponProperties(0, 0, -2, false, false, false)), // Armor

        new Item(20, "Hełm 'Łebka'", ItemType.Helmet, 4, new ArmorProperties(ArmorClass.Light)),
        new Item(21, "Hełm garnczkowy", ItemType.Helmet, 7, new ArmorProperties(ArmorClass.Heavy)),
        new Item(22, "Koszulka kolcza", ItemType.Armor, 4, new ArmorProperties(ArmorClass.Light)),
        new Item(23, "Napierśnik płytowy", ItemType.Armor, 7, new ArmorProperties(ArmorClass.Heavy)),
        new Item(24, "Nagolennik skórzany", ItemType.Greaves, 4, new ArmorProperties(ArmorClass.Light)),
        new Item(25, "Nagolennik metalowy", ItemType.Greaves, 7, new ArmorProperties(ArmorClass.Heavy)),
        new Item(26, "Tarcza stalowa", ItemType.Shield, 10, new ArmorProperties(ArmorClass.Heavy)),
        new Item(27, "Tarcza drewniana", ItemType.Shield, 3, new ArmorProperties(ArmorClass.Light)), // Ranged

        new Item(28, "Łuk", ItemType.RangedWeapon, 10, new RangedWeaponProperties(1, 60)),
        new Item(29, "Kusza", ItemType.RangedWeapon, 16, new RangedWeaponProperties(1, 40)),
        new Item(30, "Proca", ItemType.RangedWeapon, 3, new RangedWeaponProperties(1, 30)),
        new Item(31, "Strzelba krasnoludzka", ItemType.RangedWeapon, 22, new RangedWeaponProperties(2, 40)),
        new Item(32, "Łuk elfów", ItemType.RangedWeapon, 19, new RangedWeaponProperties(1, 60))

        ];

        //items = _.filter(items, function(x){ return [1, 28].indexOf(x.id) != -1; });

        return {
            "races": races,
            "professions": professions,
            "items": items
        };
    }]);

angular.module('ut.constant.lookups', ['ut.constant.lists'])
    .factory('racesLookup', ['lists',

    function (ut) {
        var races = ut.races;
        var raceLookup = {};
        for (var i = 0; i < races.length; i++) {
            raceLookup[races[i].id] = races[i];
        }

        return raceLookup;

    }]).factory('professionsLookup', ['lists',

    function (ut) {

        var professions = ut.professions;
        var professionLookup = {};
        for (var i = 0; i < professions.length; i++) {
            professionLookup[professions[i].id] = professions[i];
        }

        return professionLookup;

    }]).factory('itemsLookup', ['lists',

    function (ut) {
        var items = ut.items;
        var itemsLookup = {};
        for (var i = 0; i < items.length; i++) {
            itemsLookup[items[i].id] = items[i];
        }

        return itemsLookup;
    }]);