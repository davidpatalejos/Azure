var app = angular.module('HomeApp', ['ui.router', 'ui.bootstrap', 'ngResource']);

app.config(function($stateProvider, $urlRouterProvider, $httpProvider) {
$urlRouterProvider.otherwise('/inicio');

$stateProvider
//*************************Inicio*********************************************
	.state('inicio', { 
	  url: '/inicio',
	  templateUrl: 'Home/Inicio',
	  controller : 'InicioCtrl'
	})
	.state('login',{
		url: '/login',
		templateUrl: 'Login/Login',
	  	controller : 'LoginCtrl'		
	})
})
