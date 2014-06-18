'use strict';

var mismarUiApp = angular
  .module('mismarUiApp', [
    'ngCookies',
    'ngResource',
    'ngSanitize',
    'ngRoute'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });

mismarUiApp.filter("titleize", function() {
  return function(input) {
    console.log(input);
    console.log(_);
    return _.str.titleize(input);
  };
});
