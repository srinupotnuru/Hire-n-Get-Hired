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
    window.location.href = '/home'
  }
  
  function login() {
    window.location.href='./login';
  }
  
  function checkUser() {
    var callBack = (user) => {
      if (user) {
        sessionStorage.setItem("user", JSON.stringify(user));
        gotoHome();
      }
    };
    firebase.auth().onAuthStateChanged(callBack);
  }
  
  function run(item)
  {
    //console.log(item);
    window.location.href="/Jobpreview.html";
    sessionStorage.setItem("data",item);
    //console.log(sessionStorage.getItem("data"));
  }