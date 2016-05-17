describe('Listings', function () {

  beforeEach(module('testApp'));

  var $controller;

  beforeEach(inject(function(_$controller_){
    $controller = _$controller_;
  }));

  describe('letter', function () {
    it('should be able to choose from a to z', function () {
      var $scope = {};
      var controller = $controller('ListingCtrl', { $scope: $scope });
      expect($scope.alphabet).toBe("abcdefghijklmnopqrstuvwxyz");
    });
  });

  describe('image', function () {
    it('should be have the size options: 192x108, 406x228, 560x315', function () {
      var $scope = {};
      var controller = $controller('ListingDetailCtrl', { $scope: $scope });
      expect($scope.recipeOptions).toEqual(['192x108', '406x228', '560x315']);
    });

    it('changeImageSize: should change the recipe value', function () {

      var $scope = {};
      var $rootScope = {};
      var controller = $controller('ListingDetailCtrl', { $scope: $scope, $rootScope: $rootScope });
      
      $scope.changeImageSize('406x228');
      expect($rootScope.recipe).toBe('406x228');

    });

  });

});     

// http://errors.angularjs.org/1.4.6/ng/areq?p0=porfolioControllers&p1=not%20a%20function%2C%20got%20undefined