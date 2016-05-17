
// the main APP:  loads the two dependencies:

var testApp = angular.module('testApp', ['ngRoute','testControllers', 'testService']);


// define our routes with the $routeProvider from ngRoute
testApp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
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


// split a string on each character
testApp.filter("letterBreak", function () {

    return function ( value ) {
        if( !value.length ) return;
        return value.split('');
    }

});

// replace the {recipe}
testApp.filter("recipeReplace", function () {

    return function ( value, size ) {
        return value.replace('{recipe}', size);
    }

});