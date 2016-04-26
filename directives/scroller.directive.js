/**
 * Created by rhartzell on 4/21/16.
 */

app.directive('sideScroller', function() {
    return {
        restrict: 'E',
        scope: {
            headlines: '='
        },
        link: function(scope, element, attr) {

            var length = 0;
            scope.offset = element.parent().width();
            
            for (var i = 0; i < scope.headlines.length; i++) {
                length += scope.headlines[i].length;
            }

            scope.duration = 0.16 * (length + 50);
        },
        templateUrl: 'directives/scroller.template.html'
    }
});