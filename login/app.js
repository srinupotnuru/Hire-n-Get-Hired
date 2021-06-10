const firebaseConfig = {
  apiKey: "AIzaSyDPX7KOs0AAXwbKMY53WOJP3b1KrbzFDek",
  authDomain: "hire-n-get-hired.firebaseapp.com",
  projectId: "hire-n-get-hired",
  storageBucket: "hire-n-get-hired.appspot.com",
  messagingSenderId: "192069608117",
  appId: "1:192069608117:web:a94123f3c31c38a35394fc",
  measurementId: "G-KL31YTH8E7"
};

firebase.initializeApp(firebaseConfig);
firebase.analytics();

function gotoHome() {
  window.location.href = "/home";
}

function redirectResult() {
  var PcallBack = function(result){
    sessionStorage.setItem("user", JSON.stringify(result.user));
    gotoHome();
  };

  var NcallBack = function(error) {
    var errorCode = error.code;
    var errorMessage = error.message;
    var email = error.email;
    var credential = error.credential;
    console.log(errorMessage);
    window.alert('there is an internal error please contact administrator\n' + errorMessage + '/n' + errorCode);
  };

  firebase.auth().getRedirectResult().then(PcallBack).catch(NcallBack);
}

function loginUser() {
  var provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt: "select_account" });
  firebase.auth().signInWithRedirect(provider).then(e=>redirectResult());
}

function checkUser() {

  firebase.auth().onAuthStateChanged( (user) => {
    if (user) {
      sessionStorage.setItem("user", JSON.stringify(user));
      gotoHome();
    } else {
      loginUser();
    }
  });
}
window.onload = function() {
  checkUser();
}