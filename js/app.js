angular.module('assessment', ['ui.router']).config(function ($stateProvider, $urlRouterProvider) {

	$urlRouterProvider.otherwise('/')

	$stateProvider
		.state('home', {
			url: '/',
			templateUrl: 'views/home.html',
			controller: 'assessmentCtrl'
		})
		.state('about', {
			url: '/about',
			templateUrl: 'views/about.html',
			controller: 'assessmentCtrl'
		})
		.state('blog', {
			url: '/blog',
			templateUrl: 'views/blog.html',
			controller: 'assessmentCtrl'
		})
		.state('pets', {
			url: '/pets',
			templateUrl: 'views/pets.html',
			controller: 'assessmentCtrl'
		})
		.state('bio', {
			url: '/bio/:id',
			templateUrl: './views/pet-bio.html',
			controller: 'assessmentCtrl'
		})

})