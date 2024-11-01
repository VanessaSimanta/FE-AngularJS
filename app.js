var classApp = angular.module('wheaterApp', ['ngRoute']);

classApp.config(['$routeProvider', function($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: 'views/home.html',
            controller: 'weatherCtrl'
        })
        .otherwise({
            redirectTo: '/'
        });
}]);
