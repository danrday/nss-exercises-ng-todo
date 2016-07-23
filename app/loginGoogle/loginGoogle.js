//TESTING

"use strict";

$("#login").click(function() {
  console.log("clicked auth");
  login.logInGoogle()
  .then(function(result) {
    var user = result.user;
    console.log("logged in user", user.uid);
    db.getSongs(templates.makeSongList);
  }).catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    // The email of the user's account used.
    var email = error.email;
    // The firebase.auth.AuthCredential type that was used.
    var credential = error.credential;
    // ...
  });
});