'use strict';

/* Directives */

angular.module('ut.directives', [])

.directive('staticInclude', function ($http, $templateCache, $compile) {
    return function (scope, element, attrs) {
        var templatePath = attrs.staticInclude;

        $http.get(templatePath, {
            cache: $templateCache
        }).success(function (response) {
            var contents = $('<div/>').html(response).contents();
            element.html(contents);
            $compile(contents)(scope);
        });
    };
})
    .directive('contenteditable', function () {
        return {
            restrict: 'A', // only activate on element attribute
            require: '?ngModel', // get a hold of NgModelController
            link: function (scope, element, attrs, ngModel) {
                if (!ngModel) return; // do nothing if no ng-model

                // Specify how UI should be updated
                ngModel.$render = function () {
                    element.html(ngModel.$viewValue || '');
                };

                // Listen for change events to enable binding
                element.on('blur keyup change', function () {
                    scope.$apply(read);
                });
                read(); // initialize

                // Write data to the model
                function read() {
                    var html = element.html();
                    // When we clear the content editable the browser leaves a <br> behind
                    // If strip-br attribute is provided then we strip this out
                    if (attrs.stripBr && html == '<br>') {
                        html = '';
                    }

                    ngModel.$setViewValue(html);
                }
            }
        };
    })
    .directive('partyCardRender', ['$q',
        function ($q) {

            var CARD_IMAGE_SRC = '/images/card.jpg'
            
            var CARD_GENERAL_COORDS = {
              name: [ 20, 75 ]  
            };

            var loadImage = function (src) {
                var q = $q.defer();

                var img = new Image();
                img.onload = function () {
                    q.resolve(img);
                };

                img.src = src;

                return q.promise;
            };
            
            var cardImageLoading = loadImage(CARD_IMAGE_SRC);

            var link = function (scope, element, attrs) {

                if (!scope.party) {
                    return;
                }

                var canvas = document.createElement('canvas');

                element.append(canvas);

                scope.$watch('party', function (party) {
                    cardImageLoading
                        .then(function (img) {
                            render(img, party);
                        });
                }, true);

                var render = function (cardImg, party) {
                    canvas.width = cardImg.width;
                    canvas.height = cardImg.height;
                    
                    var context = canvas.getContext('2d');
                    context.drawImage(cardImg, 0, 0);
                    context.font= "20px Georgia";
                    context.fillText(party.name, CARD_GENERAL_COORDS.name[0], CARD_GENERAL_COORDS.name[1]);
                };
            };

            return {
                restrict: 'A',
                transclude: true,
                link: link
            };
    }]);