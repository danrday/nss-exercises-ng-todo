"use strict";

var app = angular.module("TodoApp", ['ngRoute']);

app.config(function($routeProvider) {
  $routeProvider.
  when('/items/list', {
    templateUrl: 'partials/item-list.html',
    controller: 'ItemListCtrl'
  }).
  when('/items/new', {
    templateUrl: 'partials/item-new.html',
    controller: 'ItemNewCtrl'
  }).
  when('/items/details', {
    templateUrl: 'partials/item-details.html',
    controller: 'ItemViewCtrl'
  }).otherwise('/items/list');
})



app.controller('TodoCtrl', function($scope) {
  $scope.showListView = true;
 

  $scope.allItem = function() {
  console.log("You clicked allitem");
  $scope.showListView = true;
}

  $scope.newItem = function() {
    console.log("You clicked new Item");
    $scope.showListView = false;
  }


});
















