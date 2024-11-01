angular.module('myApp').config(function($routeProvider) {
    $routeProvider
      .when('/home', {
        templateUrl: 'app/components/home/home.html',
        controller: 'HomeController'
      })
      .when('/about', {
        templateUrl: 'app/components/about/about.html',
        controller: 'AboutController'
      })
      .otherwise({
        redirectTo: '/home'
      });
  });
  