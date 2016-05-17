// the controller is used to link the the model to the view. 
// it handles interactions with the view and updates the model accordingly


var testControllers = angular.module('testControllers', []);



testControllers.controller('HomeCtrl', ['$scope', '$routeParams', '$http',
  function($scope, $routeParams, $http) {

  }])
;


testControllers.controller('ListingCtrl', ['$scope', '$routeParams', 'testService',
  function($scope, $routeParams, testService) {

    $scope.alphabet = "abcdefghijklmnopqrstuvwxyz";
  
  }]);

testControllers.controller('ListingDetailCtrl', ['$scope', '$rootScope', '$routeParams', 'testService',

  function($scope, $rootScope, $routeParams, testService) {

    // alphabet navigation
    $scope.alphabet = "abcdefghijklmnopqrstuvwxyz";

    // bind the letter to the scope
    $scope.listingLetter = $routeParams.listingLetter;

    // scope variables;
    // $scope.atozlisting = [];

    $scope.recipeOptions = ['192x108', '406x228', '560x315'];

    if($rootScope.recipe === undefined){
      $rootScope.recipe = "192x108";
    }

    $scope.changeImageSize = function(size){
      $rootScope.recipe = size;
    }

    // get results and bind to scope
    var bindDataToScope = function(apiData){
      // console.log(apiData);
      $scope.atozlisting = apiData.elements;
    }

    testService.getData($scope.listingLetter, 1, bindDataToScope);

  


  }]);