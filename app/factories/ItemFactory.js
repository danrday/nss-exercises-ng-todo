"use strict";

   app.factory("ItemStorage", function($q, AuthFactory, $http, FirebaseURL) {

  let getItemList = function() {
    let userId = AuthFactory.getUser();
    let items = [];
    return $q(function(resolve, reject) {
      $http.get(`${FirebaseURL}items.json?orderBy="uid"&equalTo="${userId}"`)
      .success(function(itemObject) {
        console.log("itemObject", itemObject)
        let itemCollection = itemObject;
        if (itemCollection) {
        Object.keys(itemCollection).forEach(function(key) {
          itemCollection[key].id=key;
          items.push(itemCollection[key]);
        });
      }
        resolve(items)
      })
      .error(function(error){
        reject(error);
      })
    });
  };

  let postNewItem = function(newItem) {
    return $q(function(resolve, reject) {
      $http.post(
        `${FirebaseURL}/items.json`,
        JSON.stringify(newItem))
      //QUESTION
      //does this send back the new Object?
      .success(function(ObjFromFirebase) {
        resolve(ObjFromFirebase)
      })
      .error(function(error) {
        reject(error);
      });
    });
  };

  return{getItemList, postNewItem}

})