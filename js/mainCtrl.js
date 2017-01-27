angular.module('assessment').controller('assessmentCtrl', function($scope, assessmentService, $stateParams) {

	$scope.getPets = function() {
		assessmentService.getPets().then(function(response) {
			$scope.pets = response
		})
	}

	$scope.getPets()

	// $scope.getProduct = function() {
	// 	assessmentService.getProduct($stateParams.id).then(function(response) {
	// 		$scope.product = response.data
	// 		console.dir($scope.product)
	// 	})
	// }

	// if ($stateParams.id) {
	// 	$scope.getProduct();
	// }
	console.log($stateParams.id)
	$scope.getPetBio = function(){
		assessmentService.getPetBio($stateParams.id)
		.then(function(response) {
		// console.log($stateParams.id)
		console.log(response + " HHHHHHH")
			$scope.bio = response;
		})
	}
	$scope.getPetBio();

})