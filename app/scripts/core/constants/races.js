angular.module('ut.core.constants')
    .factory('races', [
        'Race',
        'RaceAttributes',
        function (Race, RaceAttributes) {
            return [
                new Race(1, 'Elf leśny', 62, ['D'], 'Skradanie', new RaceAttributes(7, 15, 7, 7, 8, 8, 7, 6)),
                new Race(2, 'Elf wyniosły', 62, ['N'], 'Taktyczna przewaga', new RaceAttributes(7, 15, 7, 7, 8, 8, 7, 6)),
                new Race(3, 'Elf ciemny', 62, ['Z'], 'Agresywna szarża', new RaceAttributes(7, 15, 7, 7, 8, 8, 7, 6)),
                new Race(4, 'Elf dziki', 62, ['N'], 'Doskok', new RaceAttributes(7, 15, 7, 7, 8, 8, 7, 6)),
                new Race(5, 'Krasnolud z Thargomind', 66, ['N'], 'Ogłuszanie', new RaceAttributes(6, 15, 7, 8, 6, 7, 8, 8)),
                new Race(6, 'Krasnolud z Północy', 66, ['Z'], 'Mściwość', new RaceAttributes(6, 15, 7, 8, 6, 7, 8, 8)),
                new Race(7, 'Człowiek z Morten', 55, ['D', 'N', 'Z'], 'Instynkt obronny', new RaceAttributes(7, 15, 7, 7, 7, 7, 7, 7)),
                new Race(8, 'Człowiek z Borii', 55, ['D', 'N', 'Z'], 'Wiara', new RaceAttributes(7, 15, 7, 7, 7, 7, 7, 7)),
                new Race(9, 'Człowiek z Vartevii', 55, ['D', 'N', 'Z'], 'Niewrażliwość', new RaceAttributes(7, 15, 7, 7, 7, 7, 7, 7)),
                new Race(10, 'Człowiek z Estanii', 55, ['D', 'N', 'Z'], 'Zabójcza precyzja', new RaceAttributes(7, 15, 7, 7, 7, 7, 7, 7)),
                new Race(11, 'Człowiek z Undorh', 55, ['D', 'N', 'Z'], 'Szał', new RaceAttributes(7, 15, 7, 7, 7, 7, 7, 7)),
                new Race(12, 'Ork z Ugruk-hor', 53, ['N', 'Z'], 'Brutalność', new RaceAttributes(6, 15, 6, 8, 6, 6, 8, 7)),
                new Race(13, 'Ork Leśny', 53, ['N', 'Z'], 'Szamanizm', new RaceAttributes(6, 15, 6, 8, 6, 6, 8, 7)),
                new Race(14, 'Czarny ork', 69, ['Z'], 'Rozszarpanie', new RaceAttributes(5, 10, 6, 9, 6, 5, 8, 9)),
                new Race(15, 'Niziołek Krótkin', 38, ['D'], 'Zręczność', new RaceAttributes(6, 20, 6, 6, 8, 7, 6, 5)),
                new Race(16, 'Niziołek Mrokin', 38, ['Z'], 'Złorzeczenie', new RaceAttributes(6, 20, 6, 6, 8, 7, 6, 5)),
                new Race(17, 'Goblin Miejski', 39, ['N', 'Z'], 'Żywotność', new RaceAttributes(6, 20, 6, 6, 8, 7, 6, 5)),
                new Race(18, 'Goblin Dziki', 39, ['N', 'Z'], 'Szaleństwo', new RaceAttributes(6, 20, 6, 6, 8, 7, 6, 5)),
                new Race(19, 'Hobgoblin', 47, ['Z'], 'Przeznaczenie', new RaceAttributes(6, 15, 6, 7, 7, 7, 6, 7)),
                new Race(20, 'Gnom', 50, ['D'], 'Wrodzona moc', new RaceAttributes(7, 15, 6, 7, 6, 8, 6, 6)),
                new Race(21, 'Półogr', 75, ['D', 'N'], 'Twarda skóra', new RaceAttributes(7, 10, 6, 9, 6, 5, 9, 9)),
                new Race(22, 'Tigerianin', 70, ['D'], 'Powalenie', new RaceAttributes(6, 15, 6, 8, 8, 5, 8, 7)),
                new Race(23, 'Vorak', 72, ['N'], 'Podstępny cios', new RaceAttributes(5, 15, 7, 6, 8, 8, 7, 8)),
                new Race(24, 'Mroczny Faun', 77, ['Z'], 'Okrucieństwo', new RaceAttributes(6, 15, 6, 8, 6, 6, 8, 9))
                ];
        }]);