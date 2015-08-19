

var ecxoApp = angular.module('ecxoApp', ['ngRoute', 'firebase']);

ecxoApp.config(function ($routeProvider) {
    $routeProvider

            .when("/chat", {
                templateUrl: "pages/chat.html",
                controller: "ChatController"
            }).
            when("/arvaaja", {
                templateUrl: "pages/arvaaja.html",
                controller: "GuessController"
            });
})


