angular.module('ut.core')
    .factory('natures', [
        'Nature',
        'MixedNature',
        function (Nature, MixedNature) {
            return [
                new Nature(1, 'Dobry'),
                new MixedNature(4, 'Praworządny', [ 1, 2 ]),
                new Nature(2, 'Neutralny'),
                new MixedNature(5, 'Anarchia', [ 2, 3 ]),
                new Nature(3, 'Zły')
            ];
        }]);