
// the main APP loads the two dependencies:
// - ngRoute: a standard angular module
// - pluginControllers: our custom module

var testApp = angular.module('testApp', ['ngRoute','testControllers', 'testService']);


// define our routes with the $routeProvider from ngRoute
testApp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/', {
        templateUrl : 'assets/views/home.html',
        controller  : 'HomeCtrl'
      }).
      when('/listing', {
        templateUrl: 'assets/views/listing-index.html',
        controller: 'ListingCtrl'
      }).
      when('/listing/:listingLetter', {
        templateUrl: 'assets/views/listing-detail.html',
        controller: 'ListingDetailCtrl'
      }).
      otherwise({
        redirectTo: '/listing'
      });
  }]);



testApp.filter("letterBreak", function () {

    return function ( value ) {
        if( !value.length ) return;
        return value.split('');
    }

});

testApp.filter("vanilla", function () {

    return function ( value, size ) {
        // console.log(value);
        // value.replace('{recipe}', size);
        // console.log(size);
        return value.replace('{recipe}', size);
    }

});