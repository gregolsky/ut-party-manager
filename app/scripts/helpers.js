
var utils = angular.module('ut.helpers', []);

utils.factory('cssHelper', [
    function () {

        var getStyle = function (className) {
            for (var i = 0; i < document.styleSheets.length; i++){
                
                var classes = document.styleSheets[i].rules ||  document.styleSheets[i].cssRules;
                
                for (var x = 0; x < classes.length; x++) {
                    var c = classes[x];
                    if (c.selectorText == className) {
                        return c.style;
                    }
                }
            }
        };
        
        var getBackgroundImageUrl = function (className) {
            var style = getStyle(className);
            
            return style ? style.backgroundImage.replace(/^url\(["']?/, '').replace(/["']?\)$/, '') : null;   
        };
        
        return {
            getBackgroundImageUrl: getBackgroundImageUrl   
        };
}]);