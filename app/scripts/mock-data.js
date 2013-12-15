angular.module('ut.mock.data', []).factory('data', [

    function () {
        return {
            parties: [{
                    'name': 'Rycerze Koralowego Brokuła',
                    'points': '1000',
                    'nature': 'Dobry',
                    'description': 'Złośliwy los połączył losy uciekinierów z przytułku Uśmiechnięta Pokrzywa - niebezpiecznych szaleńców, morderców i gwałcicieli koni, którzy mają wszystko za nic.',
                    'members': [
                        {
                            'name': 'Grognak',
                            'img': 'Human_1',
                            'race': 1,
                            'profession': 12,
                            'equipment': []
                        },
                        {
                            'name': 'Eveline',
                            'race': 2,
                            'profession': 3,
                            'img': 'Elf_1',
                            'equipment': [5]
                        },
                        {
                            'name': 'Daenerys',
                            'race': 3,
                            'profession': 1,
                            'img': 'Troll_4',
                            'equipment': [23]
                        },
                        {
                            'name': 'Ophelia',
                            'race': 6,
                            'profession': 5,
                            'img': 'Elf_2',
                            'equipment': [12, 25]
                        },
                        {
                            'name': 'Thordin',
                            'race': 8,
                            'profession': 7,
                            'img': 'Elf_3',
                            'equipment': [6, 31, 27]
                        }
  ]
 }
 ]

        };

}]);