angular.module('assessment').directive('petdrct', function() {

	return {
		templateUrl: './views/pet-tmpl.html',
		restrict: "AE",
		scope: {
			pet: "=",
		}
	}

})