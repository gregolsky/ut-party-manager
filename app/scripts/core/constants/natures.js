angular.module('ut.core')
    .factory('natures', [
        'Nature',
        function (Nature) {
            return [
                new Nature(1, 'Dobry'),
                new Nature(2, 'Neutralny'),
                new Nature(3, 'Zły')
            ];
        }]);