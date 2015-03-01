var CatDogApp = angular.module('CatDogApp', ['ngRoute']);

CatDogApp.config(function($routeProvider){
	$routePeovider.when('/', {
		controller: 'ListController',
		templateUrl: 'app/views/list.html'
	});
	// Lisää reitit tänne
});