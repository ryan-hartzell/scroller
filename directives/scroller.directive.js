/**
 * Created by rhartzell on 4/21/16.
 */

app.directive('sideScroller', function($window) {
    return {
        restrict: 'E',
        scope: {
            headlines: '='
        },
        link: function(scope, element, attr) {

            var length = 0;
            scope.offset = $window.innerWidth;
            
            for (var i = 0; i < scope.headlines.length; i++) {
                length += scope.headlines[i].length;
            }

            scope.duration = 0.15 * (length + 50);
        },
        templateUrl: 'directives/scroller.template.html'
    }
});