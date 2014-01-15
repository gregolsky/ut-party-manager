angular.module('ut.core')
    .factory('items', [
        'Item',
        'ItemType',
        'MeleeWeaponProperties',
        'ArmorProperties',
        'RangedWeaponProperties',
        'ArmorClass',
        function (
            Item,
            ItemType,
            MeleeWeaponProperties,
            ArmorProperties,
            RangedWeaponProperties,
            ArmorClass) {

            return [
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

        }]);