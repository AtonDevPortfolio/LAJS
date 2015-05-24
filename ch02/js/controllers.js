//  chap2/controllers.js

'use strict'
// Controllers

var helloWorldControllers = angular.module('helloWorldControllers', []);

helloWorldControllers.controller('MainCtrl', ['$scope', '$location', '$http',
	function MainCtrl($scope, $location, $http) {
		$scope.message = "hello Mordor.";
	}]);

helloWorldControllers.controller('ShowCtrl', ['$scope', '$location', '$http',
	function ShowCtrl($scope, $location, $http) {
		$scope.message = "Show the World";
	}]);