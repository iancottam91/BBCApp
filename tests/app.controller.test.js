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

    it('getImageWidth: should get the width from image size', function(){

      var $scope = {};
      var $rootScope = {};
      var width = 0;
      var controller = $controller('ListingDetailCtrl', { $scope: $scope, $rootScope: $rootScope });
      
      width = $scope.getImageWidth('406x228');
      expect(width).toBe('406');

    })

  });

  describe('bind', function(){

    it('bindDataToScope should take api data and bind it to the scope variable atozlisting', function(){

      var $scope = {};
      var controller = $controller('ListingDetailCtrl', { $scope: $scope });
      var someData = {'elements' : 'test'};

      $scope.bindDataToScope(someData);

      expect($scope.atozlisting).toBe('test');


    });



    it('bindTotalItemsToScope should take a number and bind it to $scope.totalItems', function(){

      var $scope = {};
      var controller = $controller('ListingDetailCtrl', { $scope: $scope });
      var totalItems = 70;
      $scope.bindTotalItemsToScope(totalItems);
      expect($scope.totalItems).toBe(70);

      // should call caluate page start

    });

  });

  describe('paginate', function(){
  
    it('calculatePageStart should set pageStart to 0 when there are no results', function(){
      var $scope = {};
      var controller = $controller('ListingDetailCtrl', { $scope: $scope });
      var totalItems = 0;
      $scope.calculatePageStart(totalItems);
      expect($scope.pageStart).toBe(0);

    });

    it('calculatePageStart should set pageStart to 1 when there are results', function(){
      var $scope = {};
      var controller = $controller('ListingDetailCtrl', { $scope: $scope });
      var totalItems = 50;
      $scope.currentPage = 1;
      $scope.calculatePageStart(totalItems);
      expect($scope.pageStart).toBe(1);

    });

    it('calculatePageStart should set pageStart to 21 when there are results and were on page 2', function(){
      var $scope = {};
      var controller = $controller('ListingDetailCtrl', { $scope: $scope });
      var totalItems = 50;
      $scope.currentPage = 2;
      $scope.calculatePageStart(totalItems);
      expect($scope.pageStart).toBe(21);

    });

    it('calculatePageEnd should set pageEnd to 0 when there are no results', function(){
      var $scope = {};
      var controller = $controller('ListingDetailCtrl', { $scope: $scope });
      var totalItems = 0;
      $scope.calculatePageEnd(totalItems);
      expect($scope.pageEnd).toBe(0);

    });

    it('calculatePageEnd should set pageEnd to 9 when there are 9 results', function(){
      var $scope = {};
      var controller = $controller('ListingDetailCtrl', { $scope: $scope });
      var totalItems = 9;
      $scope.calculatePageEnd(totalItems);
      expect($scope.pageEnd).toBe(9);

    });

    it('calculatePageEnd should set pageEnd to 20 when there are 80 results and were on the first page', function(){
      var $scope = {};
      var controller = $controller('ListingDetailCtrl', { $scope: $scope });
      var totalItems = 80;
      $scope.calculatePageEnd(totalItems);
      expect($scope.pageEnd).toBe(20);

    });

    it('calculatePageEnd should set pageEnd to 40 when there are 80 results and were on the second page', function(){
      var $scope = {};
      var controller = $controller('ListingDetailCtrl', { $scope: $scope });
      var totalItems = 80;
      $scope.currentPage = 2;
      $scope.calculatePageEnd(totalItems);
      expect($scope.pageEnd).toBe(40);

    });

  });    

});     

// http://errors.angularjs.org/1.4.6/ng/areq?p0=porfolioControllers&p1=not%20a%20function%2C%20got%20undefined