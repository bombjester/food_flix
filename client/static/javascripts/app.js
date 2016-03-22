var Myapp = angular.module('Myapp', ['ngRoute', 'ui.bootstrap']);
            
	Myapp.config(function($routeProvider, $locationProvider){
	    $routeProvider
	    .when('/' , {
	        templateUrl: 'static/partials/main.html'
	    })
	    .otherwise({
	        redirectTo: '/'
	    }); 
	    
	})