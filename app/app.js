"use strict";

var app = angular.module("TodoApp", ['ngRoute'])
.constant('FirebaseURL', "https://todo-8001c.firebaseio.com/")

//QUESTION: CAN YOU CHAIN .CONSTANTS ABOVE?
//WHAT DOES NGROUTE DO?

//WHY IS THERE NO BROWSERIFY FOR ANGULAR?

app.config(function($routeProvider, FBCreds) {
  let authConfig = {
    apiKey: FBCreds.apiKey,
    authDomain: FBCreds.authDomain
  }
  firebase.initializeApp(authConfig);


  $routeProvider.
  when('/items/list', {
    templateUrl: 'partials/item-list.html',
    controller: 'ItemListCtrl'
  }).
  when('/items/new', {
    templateUrl: 'partials/item-new.html',
    controller: 'ItemNewCtrl'
  }).
  when('/items/details/:itemId', {
    templateUrl: 'partials/item-details.html',
    controller: 'ItemViewCtrl'
  }).otherwise('/items/list');
})


//what is this doing below???

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
















