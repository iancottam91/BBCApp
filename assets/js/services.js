var testService = angular.module('testService', []);

testService.service('testService', ['$http',
 function ( $http ) {

 	this.getData = function readyFn(letter, page, callback){
 		// console.log('letter: ' + letter);
 		// console.log('page: ' + page);

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