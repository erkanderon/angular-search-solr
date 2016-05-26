'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
  'ngRoute',
  'SearchPage',
    'SearchPage2'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.
      when('/search', {
        templateUrl: 'SearchPage/search-page.html',
        controller: 'SearchCtrl'
      }).
      when('/search2', {
          templateUrl: 'SearchPage2/search_page_2.html',
          controller: 'SearchCtrl2'
      }).
      otherwise({redirectTo: '/search2'});
}]);
