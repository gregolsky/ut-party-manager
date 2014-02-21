angular.module('ut.core')
    .factory('professions', [
        'Profession',
        function (Profession) {
            
            var isOneOf = function () {
                var options = arguments;
                return function (item) {
                    if (!item) {
                        return true;    
                    }
                    
                    return _.some(options, function (opt) {
                       return opt == item; 
                    });
                };
            };
            
            var isNotOneOf = function () {
                var options = arguments;
                return function (item) {
                    if (!item) {
                        return true;    
                    }
                    
                    return _.every(options, function (opt) {
                       return opt != item; 
                    });
                };
            };            
            
            return [
                new Profession(1, 'Akolita', 'Posługa'),
                new Profession(2, 'Alchemik', 'Eliksiry'),
                new Profession(3, 'Banita', 'Przebiegłość', null, isNotOneOf(4)),
                new Profession(4, 'Barbarzyńca', 'Krzepa', null, isNotOneOf(4)),
                new Profession(5, 'Bard', 'Poetyckie kroniki'),
                new Profession(6, 'Berserker', 'Szał', null, isNotOneOf(4)),
                new Profession(7, 'Czarny Rycerz', 'Aura Śmierci', isOneOf(7, 8, 9, 11, 16), isOneOf(3)),
                new Profession(8, 'Czarodziej', 'Rzucanie czarów'),
                new Profession(9, 'Czempion Królewski', 'Wyspecjalizowanie'),
                new Profession(10, 'Druid', 'Magiczny Menhir', null, isNotOneOf(3)),
                new Profession(11, 'Fałszywy Prorok', 'Przeklęte Wizje', isOneOf(6, 7, 8, 9, 10, 11, 17, 18), isOneOf(5)),
                new Profession(12, 'Giermek', 'Odwrócenie uwagi'),
                new Profession(13, 'Gladiator', 'Słaby punkt'),
                new Profession(14, 'Gwardzista', 'Natarcie'),
                new Profession(15, 'Hiena cmentarna', 'Znawca nekropolii'),
                new Profession(16, 'Kapłan', 'Święta walka'),
                new Profession(17, 'Kleryk', 'Modlitwy', null, isNotOneOf(5)),
                new Profession(18, 'Korsarz', 'Zuchwała szarża'),
                new Profession(19, 'Łapserdak', ''),
                new Profession(20, 'Łowca Czarownic', 'Polowanie', null, isNotOneOf(1, 3)),
                new Profession(21, 'Łowca Głów', 'Atak na czerep'),
                new Profession(22, 'Łowca Nagród', 'Wielka szansa'),
                new Profession(23, 'Mistrz Łuku', 'Sokole oko'),
                new Profession(24, 'Mistrz miecza', 'Perfekcja'),
                new Profession(25, 'Mnich', 'Znawca świątyń'),
                new Profession(26, 'Nożownik', 'Zasztyletowanie', null, isNotOneOf(1, 4)),
                new Profession(27, 'Paladyn', 'Aura Inspiracji', isOneOf(7, 8, 9, 11, 15), isOneOf(1)),
                new Profession(28, 'Podstępny kupiec', 'Handlowanie'),
                new Profession(29, 'Przepatrywacz', 'Znawca tropów'),
                new Profession(30, 'Rozbójnik', 'Atak z zaskoczenia', null, isNotOneOf(1, 4)),
                new Profession(31, 'Rusznikarz', 'Rusznikarstwo'),
                new Profession(32, 'Rycerz zakonny', 'Zakonna determinacja', isOneOf(7, 8, 9, 11, 21), isOneOf(2)),
                new Profession(33, 'Sierżant Strażników', 'Chronić i służyć'),
                new Profession(34, 'Skald', 'Bitewne pieśni'),
                new Profession(35, 'Skrytobójca', 'Perfekcyjne zabójstwo', null, isNotOneOf(1)),
                new Profession(36, 'Strażnik Kniei', 'Terenoznawstwo'),
                new Profession(37, 'Strzelec', 'Strzał w ruchu'),
                new Profession(38, 'Szaman', 'Rytuał', null, isNotOneOf(1, 4)),
                new Profession(39, 'Szampierz', 'Zamaszyste cięcie'),
                new Profession(40, 'Szarlatan', 'Obłędna gadanina'),
                new Profession(41, 'Szermierz', 'Zastawa'),
                new Profession(42, 'Topornik', 'Siła ostrza'),
                new Profession(43, 'Uliczny Sędzia', 'Ja jestem PRAWEM!!!', isOneOf(7, 8, 9, 10, 11, 21), isOneOf(4)),
                new Profession(44, 'Uczeń Czarodzieja', 'Przyuczenie'),
                new Profession(45, 'Wielki Łowczy', 'Terenoznawstwo'),
                new Profession(46, 'Wojownik klanu', 'Rytualna walka'),
                new Profession(47, 'Wróżbita', 'Przewidywanie'),
                new Profession(48, 'Zabójca', 'Perfekcyjny atak', null, isNotOneOf(1)),
                new Profession(49, 'Zbrojny', 'Wyszkolenie'),
                new Profession(50, 'Zielarz', 'Warzenia naparów/trucizn'),
                new Profession(51, 'Złodziej', 'Doliniarstwo', null, isNotOneOf(4)),
                new Profession(52, 'Zwadźca', 'Dwie bronie'),
                new Profession(53, 'Zwiadowca', 'Skradanie')
                ];
        }]);