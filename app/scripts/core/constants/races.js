angular.module('ut.core.constants')
    .factory('races', [
        'Race',
        'RaceAttributes',
        function (Race, RaceAttributes) {
            return [
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
        }]);