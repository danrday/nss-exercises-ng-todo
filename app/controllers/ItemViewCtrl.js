 "use strict";


app.controller("ItemViewCtrl", function($scope, $routeParams, ItemStorage) {

  //QUESTION
  //DOES IT NEED TO BE $SCOPE.ITEMS SINCE $SCOPE.ITEMS ARE NOT BEING DISPLAYED ON THE DETAILS PAGE?

  $scope.items = [];
  // $scope.selectedItem = {};


  ItemStorage.getItemList()
  .then(function(itemCollection) {
    $scope.items = itemCollection;

    $scope.selectedItem = $scope.items.filter(function(item) {
      return item.id === $routeParams.itemId;
    })[0];
  })
})