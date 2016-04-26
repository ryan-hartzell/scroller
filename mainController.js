/**
 * Created by rhartzell on 4/21/16.
 */

var app = angular.module('sideScroller', []);

app.controller('mainController', function($scope) {

        $scope.news = [
            'Prince, an Artist Who Defied Genre, Is Dead at 57',
            'FBI Director Suggests Bill for iPhone Hacking Topped $1.3 Million',
            'Obama Raises Hackles in Brexit Debate as He Visits UK',
            'Alphabet\'s Earnings Miss Forecasts',
            'VW forges US deal arising from diesel emissions scandal',
            'Canadian hostage John Ridsdel killed in the Philippines',
            'Alleged Hastert abuse victim sues for additional $1.8 million he claims he\'s owed',
            'Regulators Approve Charter Communications Deal for Time Warner Cable'
        ];
});