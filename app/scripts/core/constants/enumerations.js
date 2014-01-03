angular.module('ut.core.constants')
    .factory('enumerations', [
        'Race', 
        'Profession', 
        'Item', 
        'RaceAttributes',
        'ItemType',
        'MeleeWeaponProperties',
        'ArmorProperties',
        'RangedWeaponProperties',
        'ArmorClass',
        function (
            Race, 
            Profession, 
            Item, 
            RaceAttributes,
            ItemType,
            MeleeWeaponProperties,
            ArmorProperties,
            RangedWeaponProperties,
            ArmorClass
        ) {

            var races = [
                new Race(1, 'Elf leśny', 70, ['D'], 'Doskok', new RaceAttributes(7, 15, 7, 7, 8, 8, 7, 6)),
                new Race(2, 'Elf wyniosły', 70, ['N'], 'Doskok', new RaceAttributes(7, 15, 7, 7, 8, 8, 7, 6)),
                new Race(3, 'Elf dziki', 70, ['N'], 'Doskok', new RaceAttributes(7, 15, 7, 7, 8, 8, 7, 6)),
                new Race(4, 'Elf ciemny', 70, ['Z'], 'Doskok', new RaceAttributes(7, 15, 7, 7, 8, 8, 7, 6)),
                new Race(5, 'Krasnolud z Thargomind', 70, ['N'], 'Ogłuszanie', new RaceAttributes(7, 15, 7, 8, 6, 7, 8, 8)),
                new Race(6, 'Krasnolud z Północy', 73, ['Z'], 'Ogłuszanie', new RaceAttributes(7, 15, 7, 8, 6, 7, 8, 8)),
                new Race(7, 'Człowiek', 50, ['D', 'N', 'Z'], 'Instynkt obronny', new RaceAttributes(7, 15, 7, 7, 7, 7, 7, 7)),
                new Race(8, 'Ork', 60, ['N', 'Z'], 'Brutalność', new RaceAttributes(6, 15, 6, 8, 6, 6, 8, 7)),
                new Race(9, 'Niziołek Krótkin', 40, ['D'], 'Braterstwo', new RaceAttributes(6, 20, 6, 6, 8, 7, 6, 5)),
                new Race(10, 'Niziołek Mrokin', 40, ['Z'], 'Braterstwo', new RaceAttributes(6, 20, 6, 6, 8, 7, 6, 5)),
                new Race(11, 'Goblin', 38, ['N', 'Z'], 'Żywotność', new RaceAttributes(6, 20, 6, 6, 8, 7, 6, 5)),
                new Race(12, 'Hobgoblin', 45, ['Z'], 'Przeznaczenie', new RaceAttributes(6, 15, 6, 7, 7, 7, 6, 7)),
                new Race(13, 'Gnom', 36, ['D'], 'Wrodzona moc', new RaceAttributes(7, 15, 6, 6, 6, 8, 6, 7)),
                new Race(14, 'Półogr', 92, ['D', 'N'], 'Twarda skóra', new RaceAttributes(5, 10, 6, 9, 5, 5, 9, 9)),
                new Race(15, 'Czarny ork', 79, ['Z'], 'Atak paszczą', new RaceAttributes(5, 10, 6, 9, 5, 5, 8, 8)),
                new Race(16, 'Tigerianin', 65, ['D'], 'Powalenie', new RaceAttributes(6, 15, 6, 8, 8, 5, 7, 7)),
                new Race(17, 'Vorak', 64, ['N'], 'Podstępny cios', new RaceAttributes(6, 15, 7, 7, 8, 6, 7, 8))
            ];

            var professions = [
                new Profession(1, 'Herszt', 70, 'Wydawanie rozkazów'),
                new Profession(2, 'Bard', 32, 'Poetyckie kroniki'),
                new Profession(3, 'Szermierz', 40, 'Dwie bronie'),
                new Profession(4, 'Barbarzyńca', 36, 'Krzepa'),
                new Profession(5, 'Zbrojny', 38, 'Opancerzenie'),
                new Profession(6, 'Strzelec', 26, 'Strzał w ruchu'),
                new Profession(7, 'Zabójca', 44, 'Perfekcyjny atak'),
                new Profession(8, 'Banita', 20, 'Ucieczka'),
                new Profession(9, 'Łapserdak', 12, ''),
                new Profession(10, 'Palladyn', 65, 'Aura inspiracji'),
                new Profession(11, 'Rycerz zakonny', 65, 'Zakonna determinacja'),
                new Profession(12, 'Czarny rycerz', 65, 'Aura śmierci'),
                new Profession(13, 'Szampierz', 39, 'Zamaszyste cięcie'),
                new Profession(14, 'Zwiadowca', 28, 'Skradanie'),
                new Profession(15, 'Tropiciel', 32, 'Znawca tropów'),
                new Profession(16, 'Berserker', 40, 'Furia'),
                new Profession(17, 'Giermek', 18, 'Odwrócenie uwagi'),
                new Profession(18, 'Złodziej', 16, 'Doliniarstwo'),
                new Profession(19, 'Nożownik', 26, 'Zasztyletowanie'),
                new Profession(20, 'Hiena cmentarna', 16, 'Znawca nekropolii'),
                new Profession(21, 'Łowca nagród', 50, 'Wielka szansa'),
                new Profession(22, 'Mnich', 16, 'Znawca świątyń'),
                new Profession(23, 'Strażnik dróg', 16, 'Terenoznawstwo'),
                new Profession(24, 'Rozbójnik', 25, 'Atak z zaskoczenia'),
                new Profession(25, 'Gladiator', 36, 'Słaby punkt'),
                new Profession(26, 'Mistrz miecza', 47, 'Perfekcja'),
                new Profession(27, 'Zwadźca', 38, 'Zastawa'),
                new Profession(28, 'Czarodziej', 66, 'Rzucanie czarów'),
                new Profession(29, 'Kleryk', 60, 'Modlitwy'),
                new Profession(30, 'Kapłan', 74, 'Święta walka'),
                new Profession(31, 'Druid', 63, 'Magiczny menhir'),
                new Profession(32, 'Szaman', 62, 'Rytuał'),
                new Profession(33, 'Alchemik', 64, 'Eliksiry')
            ];

            var items = [
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

            return {
                "races": races,
                "professions": professions,
                "items": items
            };
}]);

