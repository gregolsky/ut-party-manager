angular.module('ut.core')
    .factory('items', [
        'Item',
        'ItemType',
        'MeleeWeaponProperties',
        'ArmorProperties',
        'RangedWeaponProperties',
        'EquipmentProperties',
        'ArmorClass',
        function (
            Item,
            ItemType,
            MeleeWeaponProperties,
            ArmorProperties,
            RangedWeaponProperties,
            EquipmentProperties,
            ArmorClass) {
            'use strict';
            return [
                new Item(1, 'Miecz', ItemType.MeleeWeapon, 11, new MeleeWeaponProperties(false, false)),
                new Item(2, 'Miecz krótki', ItemType.MeleeWeapon, 11, new MeleeWeaponProperties(false, false)),
                new Item(3, 'Topór', ItemType.MeleeWeapon, 8, new MeleeWeaponProperties(false, false)),
                new Item(4, 'Sejmitar', ItemType.MeleeWeapon, 8, new MeleeWeaponProperties(false, false)),
                new Item(5, 'Młot', ItemType.MeleeWeapon, 10, new MeleeWeaponProperties(false, false)),
                new Item(6, 'Morgenstern', ItemType.MeleeWeapon, 10, new MeleeWeaponProperties(false, false)),
                new Item(7, 'Szabla', ItemType.MeleeWeapon, 14, new MeleeWeaponProperties(false, false)),
                new Item(8, 'Rapier', ItemType.MeleeWeapon, 14, new MeleeWeaponProperties(false, false)),
                new Item(9, 'Włócznia', ItemType.MeleeWeapon, 13, new MeleeWeaponProperties(false, false)),
                new Item(10, 'Maczuga', ItemType.MeleeWeapon, 6, new MeleeWeaponProperties(false, false)),
                new Item(11, 'Pałka', ItemType.MeleeWeapon, 6, new MeleeWeaponProperties(false, false)),
                new Item(12, 'Widły', ItemType.MeleeWeapon, 5, new MeleeWeaponProperties(false, false)),
                new Item(13, 'Kij', ItemType.MeleeWeapon, 5, new MeleeWeaponProperties(false, false)),

                new Item(14, 'Miecz półtoraręczny', ItemType.MeleeWeapon, 28, new MeleeWeaponProperties(true, false)),
                new Item(15, 'Miecz dwuręczny', ItemType.MeleeWeapon, 27, new MeleeWeaponProperties(true, false)),
                new Item(16, 'Topór dwuręczny', ItemType.MeleeWeapon, 26, new MeleeWeaponProperties(true, false)),
                new Item(17, 'Młot dwuręczny', ItemType.MeleeWeapon, 27, new MeleeWeaponProperties(true, false)),
                new Item(18, 'Halabarda', ItemType.MeleeWeapon, 24, new MeleeWeaponProperties(true, false)),
                new Item(19, 'Korbacz', ItemType.MeleeWeapon, 24, new MeleeWeaponProperties(true, false)),
                new Item(20, 'Kostur', ItemType.MeleeWeapon, 6, new MeleeWeaponProperties(true, false)),

                new Item(21, 'Sztylet', ItemType.MeleeWeapon, 5, new MeleeWeaponProperties(false, true)),
                new Item(22, 'Nóż', ItemType.MeleeWeapon, 2, new MeleeWeaponProperties(false, true)),

                new Item(23, 'Asari Tiheri', ItemType.MeleeWeapon, 32, new MeleeWeaponProperties(true, false), [22]),
                new Item(24, 'Topór Groma', ItemType.MeleeWeapon, 38, new MeleeWeaponProperties(true, false), [6]),
                new Item(25, 'Młot Asmunda', ItemType.MeleeWeapon, 43, new MeleeWeaponProperties(false, false), [5]),
                new Item(26, 'Ussarous', ItemType.MeleeWeapon, 25, new MeleeWeaponProperties(false, false), [23]),


                new Item(27, 'Łuk', ItemType.RangedWeapon, 14, new RangedWeaponProperties()),
                new Item(28, 'Długi łuk', ItemType.RangedWeapon, 19, new RangedWeaponProperties()),
                new Item(29, 'Kusza', ItemType.RangedWeapon, 17, new RangedWeaponProperties()),
                new Item(30, 'Kusza powtarzalna', ItemType.RangedWeapon, 21, new RangedWeaponProperties()),
                new Item(31, 'Proca', ItemType.RangedWeapon, 3, new RangedWeaponProperties()),

                new Item(32, 'Strzelba', ItemType.RangedWeapon, 26, new RangedWeaponProperties()),
                new Item(33, 'Garłacz', ItemType.RangedWeapon, 22, new RangedWeaponProperties()),
                new Item(34, 'Armatka', ItemType.RangedWeapon, 16, new RangedWeaponProperties(), [15, 16, 17, 18]),

                new Item(35, 'Noże do rzucania', ItemType.RangedWeapon, 12, new RangedWeaponProperties()),
                new Item(36, 'Bomba', ItemType.RangedWeapon, 13, new RangedWeaponProperties()),

                new Item(37, 'Łuk Morrenviel', ItemType.RangedWeapon, 26, new RangedWeaponProperties(), [1, 2, 3, 4]),
                new Item(38, 'Kusza Zagłady', ItemType.RangedWeapon, 21, new RangedWeaponProperties(), [19]),
                new Item(39, 'Proca Króla Oprychów', ItemType.RangedWeapon, 9, new RangedWeaponProperties(), [15, 16]),
                new Item(40, 'Plugawy Garłacz', ItemType.RangedWeapon, 28, new RangedWeaponProperties(), [12, 13, 14]),


                new Item(41, 'Hełm lekki', ItemType.Helmet, 4, new ArmorProperties(ArmorClass.Light)),
                new Item(42, 'Hełm ciężki', ItemType.Helmet, 7, new ArmorProperties(ArmorClass.Heavy)),
                new Item(43, 'Koszulka kolcza', ItemType.Armor, 4, new ArmorProperties(ArmorClass.Light)),
                new Item(44, 'Napierśnik płytowy', ItemType.Armor, 7, new ArmorProperties(ArmorClass.Heavy)),
                new Item(45, 'Nagolennik skórzany', ItemType.Greaves, 4, new ArmorProperties(ArmorClass.Light)),
                new Item(46, 'Nagolennik metalowy', ItemType.Greaves, 7, new ArmorProperties(ArmorClass.Heavy)),
                new Item(47, 'Tarcza drewniana', ItemType.Shield, 3, new ArmorProperties(ArmorClass.Light)),
                new Item(48, 'Tarcza stalowa', ItemType.Shield, 10, new ArmorProperties(ArmorClass.Heavy)),


                new Item(49, 'Lina', ItemType.Equipment, 1, new EquipmentProperties()),
                new Item(50, 'Latarnia/pochodnia', ItemType.Equipment, 3, new EquipmentProperties()),
                new Item(51, 'Hubka i krzesiwo', ItemType.Equipment, 2, new EquipmentProperties()),
                new Item(52, 'Leczący eliksir', ItemType.Equipment, 5, new EquipmentProperties()),
                new Item(53, 'Trucizna', ItemType.Equipment, 3, new EquipmentProperties()),
                new Item(54, 'Zioła', ItemType.Equipment, 1, new EquipmentProperties()),
                new Item(55, 'Talizman przeznaczenia', ItemType.Equipment, 7, new EquipmentProperties()),
                new Item(56, 'Bitewny relikt', ItemType.Equipment, 3, new EquipmentProperties()),
                new Item(57, 'Peleryna tropiciela', ItemType.Equipment, 8, new EquipmentProperties()),
                new Item(58, 'Szkiełko', ItemType.Equipment, 1, new EquipmentProperties()),
                new Item(59, 'Amulet Odwagi', ItemType.Equipment, 4, new EquipmentProperties()),
                new Item(60, 'Trofeum/totem', ItemType.Equipment, 8, new EquipmentProperties()),
                new Item(61, 'Róg', ItemType.Equipment, 5, new EquipmentProperties()),
                new Item(62, 'Maska zabójcy', ItemType.Equipment, 6, new EquipmentProperties()),
                new Item(63, 'Groty przeciwpancerne', ItemType.Equipment, 4, new EquipmentProperties()),
                new Item(64, 'Groty zapalające', ItemType.Equipment, 5, new EquipmentProperties()),
                new Item(65, 'Groty łowieckie', ItemType.Equipment, 6, new EquipmentProperties()),
                ];

        }]);