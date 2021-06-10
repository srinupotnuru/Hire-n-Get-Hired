$('document').ready(function () {
console.log(sessionStorage.getItem('data'))
document.getElementById("header").innerHTML="Here are currently available " + sessionStorage.getItem('data') + " jobs";

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
var jobrole=sessionStorage.getItem('data');
const temp=firebase.firestore().collection(jobrole).get();
        temp.then(querySnapshot => {
          const arr = querySnapshot.docs.map(doc => doc.data())
          
         
          var len = Object.keys(arr).length;
          for(var i=0;i<len;i++)
          {
            var item='';
              item+='<div class="box"><h3>'+arr[i].title+'</h3><h5>' + 'Company' + '</h5>';
              item+='<p>' + arr[i].company + '</p>';
              item+= '<h5>Job Description</h5>';
              item+= '<p>' + arr[i].description +'</p>';
              item+='<h5>Salary</h5>';
              item+='<p>' + arr[i].salary + '</p>';
              item+='<h5>Number of openings</h5>';
              item+='<p>' + arr[i].openings + '</p>';
              item+='<h5>Additional Information</h5>';
              item+='<p>' + arr[i].additional + '</p>';
              item+='<h5>Contact</h5>';
              item+='<p>' + arr[i].contact + '</p>' + '</div>';
              console.log(item);
              $('#jobs').append(item);

          }
        });



});