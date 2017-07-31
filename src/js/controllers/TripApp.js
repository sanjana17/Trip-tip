var myApp = angular.module('TripApp',['ngMaterial','ngRoute','ngMessages','google.places']);

myApp.controller('TripController', ['$scope','$http', function($scope,$http) {
$scope.budgetFields = false;
$scope.friends = [];
  
  $scope.next = function(){
      $scope.budgetFields = true;
  }
  
}]);

myApp.config(function($routeProvider) {
    $routeProvider
    .when("/", {
        templateUrl : "../src/templates/main.html"
    })
    .when("/addBudget", {
        templateUrl : "../src/templates/addCalc.html",
        controller : "TripController"
    })
});