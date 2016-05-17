var testService = angular.module('testService', []);

testService.service('testService', ['$http',
 function ( $http ) {

 	// get the a-z data
 	this.getData = function readyFn(letter, page, callback){


 		if(page === undefined){
 			page = 1;
 		}

 		$http({
 			method: 'GET',
 			url: 'https://ibl.api.bbci.co.uk/ibl/v1/atoz/' + letter + '/programmes?page=' + page
 		}).then(function successCallback(response) {
		    callback( response.data.atoz_programmes );
		}, function errorCallback(response) {
		    

		});

 	};

 	// get the total number of listings
 	this.getTotalItems = function readyFn(letter, callback){
 		$http({
 			method: 'GET',
 			url: 'https://ibl.api.bbci.co.uk/ibl/v1/atoz/' + letter + '/programmes'
 		}).then(function successCallback(response) {
		    callback( response.data.atoz_programmes.count );
		}, function errorCallback(response) {
		    

		});
 	}


	
}])