"use strict";

app.controller("ItemListCtrl", function(FirebaseURL, $http, $scope, AuthFactory, ItemStorage) {


$scope.deleteItem = function(thingy) {
    console.log("thingy", thingy.id);
    $http.delete(`${FirebaseURL}items/${thingy.id}.json`).success(function() {
      refreshItems();
    }
    )
  }




  //   .then(ItemStorage.getItemList()
  //     .then(function(itemCollection) {
  //   $scope.items = itemCollection;
  //   console.log("itemCollection", itemCollection)
  // }))
  // }


let refreshItems = function() {
  if (userLoggedIn === true) {
  ItemStorage.getItemList()
  .then(function(itemCollection) {
    $scope.items = itemCollection;
  });
} else {
  console.log("not logged in");
}
}


let userLoggedIn = AuthFactory.isAuthenticated();

console.log("userLoggedIN ????", userLoggedIn);
console.log("USER ID???", AuthFactory.getUser());

  if (userLoggedIn === true) {
  ItemStorage.getItemList()
  .then(function(itemCollection) {
    $scope.items = itemCollection;
  });
} else {
  console.log("not logged in");
}

})