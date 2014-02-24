angular.module('ut.utils')
    .service('imageLoader', ['$q',
            function ($q) {

            var loadImage = function (src) {
                var q = $q.defer();

                var img = new Image();

                img.onload = function () {
                    q.resolve(img);
                };

                img.src = src;

                return q.promise;
            };

            return loadImage;
    }]);