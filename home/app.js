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

function gotoLogin() {
  
}

function setHome() {
  let d = document.getElementById('name');
  let u = sessionStorage.getItem('user');
  u = JSON.parse(u);
  d.innerHTML =  u.displayName;
}

function logOut() {
  var callBack = (e) => {
    gotoLogin();
  };
  sessionStorage.clear();
  firebase.auth().signOut().finally(callBack);
}

function checkUser() {
  var callBack = (user) => {
    if (user) {
      sessionStorage.setItem("user", JSON.stringify(user));
      setHome();
    } else {
      gotoLogin();
    }
  };
  firebase.auth().onAuthStateChanged(callBack);
}

window.onload = function() {
  checkUser();
}
function push()
{
  
  var cat=document.getElementById("cat").value;
  var des=document.getElementById('desc').value;
  var salary=document.getElementById('salary').value;
  var additional = document.getElementById('additional').value;
  var openings = document.getElementById('openings').value;
  var company=document.getElementById('company').value;
  var contact = document.getElementById('contact').value
  let u = sessionStorage.getItem('user');
  u=JSON.parse(u);
  console.log(u);
  var id=u.email;
  id=id.substring(0,id.length-4);
  var dt=new Date().getTime();
  id=id+dt;
  const ref_obj = firebase.firestore().collection(cat).doc(id);
        ref_obj.set({
            "title": cat,
            "description":des,
            "salary":salary,
            "additional":additional,
            "openings":openings,
            "company":company,
            "contact":contact,

    
        });
        
       window.location.reload();
}