var firebaseConfig = {
  apiKey: "AIzaSyCxTHYADPh8vbN4cYw9YMB4tvvi_d7VXmg",
  authDomain: "codelabs-4373c.firebaseapp.com",
  projectId: "codelabs-4373c",
  storageBucket: "codelabs-4373c.appspot.com",
  messagingSenderId: "835368477952",
  appId: "1:835368477952:web:f0a339b55b5dc460bdffe5",
  measurementId: "G-9KHLDL9H2H"
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
        var temp=firebase.firestore().collection(cat).get();
        temp.then(querySnapshot => {
          const documents = querySnapshot.docs.map(doc => doc.data())
          console.log(documents);
        });
       
}