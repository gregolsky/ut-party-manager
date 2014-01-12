angular.module('ut.core.constants')
    .factory('natures', [
        'Nature',
        function (Nature) {
            return [
                new Nature(1, 'Dobry'),
                new Nature(2, 'Neutralny'),
                new Nature(3, 'Zły')
            ];
        }]);