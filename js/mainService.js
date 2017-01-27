angular.module('assessment').service('assessmentService', function($http) {

	this.getPets = function() {

    	return $http({
      		method: 'GET',
      		url: 'http://practiceapi.devmounta.in/pets'
    	}).then(function(response) {
        // console.log(response)
      return response.data
    })
  	}

  	// this.getProduct = function(id) {

  	// 	console.log(id)
  	// 	return $http({
  	// 		method: 'GET',
  	// 		url: 'http://practiceapi.devmounta.in/pets/' + id
  	// 	})
  	// }

    this.getPetBio = function(id) {
      console.log(id)
      return $http({
        method: 'GET',
        url: 'http://practiceapi.devmounta.in/pets/' + id
      }).then(function(response) {
        console.log(response.data)
        return (response.data);
      })
    }

})