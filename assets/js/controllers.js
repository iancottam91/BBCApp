// the controller is used to link the the model to the view. 
// it handles interactions with the view and updates the model accordingly


var testControllers = angular.module('testControllers', ['ui.bootstrap']);



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
      $rootScope.recipe = "406x228";
      $rootScope.boxWidth = "406";
    }


    $scope.changeImageSize = function(size){
      $rootScope.recipe = size;
      $rootScope.boxWidth = $scope.getImageWidth(size);
    }

    $scope.getImageWidth = function(recipe){

      return recipe.split('x')[0];

    }

    // get results and bind to scope
    $scope.bindDataToScope = function(apiData){
      // console.log(apiData);
      $scope.atozlisting = apiData.elements;
    }

    testService.getData($scope.listingLetter, 1, $scope.bindDataToScope);

    // pagination

    $scope.bindTotalItemsToScope = function(itemsNumber){
      $scope.totalItems = itemsNumber;
      $scope.calculatePageStart($scope.totalItems);
      $scope.calculatePageEnd($scope.totalItems);
    }

    // get the total number of items to bind to the scope and build pagination
    testService.getTotalItems($scope.listingLetter, $scope.bindTotalItemsToScope);

    // get total items from the api
    $scope.currentPage = 1;


    $scope.pageStart = 1;
    $scope.pageEnd = 20;

    $scope.calculatePageStart = function(totalItems){

      if(totalItems === 0){
        $scope.pageStart = 0;
      } else {
        $scope.pageStart = (20*($scope.currentPage - 1)) + 1;
      }

    }

    $scope.calculatePageEnd = function(totalItems){

      if( totalItems < ($scope.currentPage * 20) ){
        $scope.pageEnd = totalItems;
      } else {
        $scope.pageEnd = (20*$scope.currentPage);
      }

    }



  
    $scope.pageChanged = function() {

      testService.getData($scope.listingLetter, $scope.currentPage, $scope.bindDataToScope);
      $scope.calculatePageStart($scope.totalItems);
      $scope.calculatePageEnd($scope.totalItems);
    };


  }]);