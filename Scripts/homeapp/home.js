angular.module('HomeApp')
.controller('InicioCtrl', ['$scope', function ($scope) {
	$scope.myInterval = 5000;
  	$scope.noWrapSlides = false;
  	$scope.active = 0;
  	$scope.slides = [{
  						image:'http://lorempixel.com/400/200',
  						text:'Es facil de usar'

  					},
  					{
 						image:'http://lorempixel.com/400/200/sports/1',
  						text:'Es facil de manejar'
  					}];
	console.log("Funciona");
}])