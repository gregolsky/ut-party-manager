angular.module('ut.utils')
    .factory('cssHelper', [

        function () {
            'use strict';

            var getStyle, getBackgroundImageUrl;

            getStyle = function (className) {

                var rules, clss, rule, i, j, findMatchingRule;

                return _(document.styleSheets)
                    .map(function (styleSheet) {
                        return styleSheet.rules || styleSheet.cssRules;
                    })
                    .map(function (rules) {
                        return _.find(rules, function (rule) {
                            return rule.selectorText === className;
                        }) || null;
                    })
                    .map(function (rule) {
                        return rule ? rule.style : null;
                    })
                    .compact()
                    .first() || null;
            };

            getBackgroundImageUrl = function (className) {
                var style = getStyle(className);
                return style ? style.backgroundImage.replace(/^url\(["']?/, '').replace(/["']?\)$/, '') : null;
            };

            return {
                getBackgroundImageUrl: getBackgroundImageUrl
            };
        }]);