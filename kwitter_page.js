//YOUR FIREBASE LINKS
const firebaseConfig = {
      apiKey: "AIzaSyBNkGQSvkPtM7vnvf2f2sZcLg_9ScTfcvA",
      authDomain: "kwitter-b9966.firebaseapp.com",
      databaseURL: "https://kwitter-b9966-default-rtdb.firebaseio.com",
      projectId: "kwitter-b9966",
      storageBucket: "kwitter-b9966.appspot.com",
      messagingSenderId: "983035202606",
      appId: "1:983035202606:web:deb397ed9d8f4c8ce4e3bf"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    
user_name = localStorage.getItem("user_name")
room_name = localStorage.getItem("room_name")

function send(){
      msg = document.getElementById("msg").Value;
      firebase.database().ref(room_name).push({
      name:user_name,
      message : msg,
      like:0
      })
      document.getElementById("msg").value = "";
}

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();

function logout(){
localStorage.removeItem("user_name");
localStorage.removeItem("room_name");
window.location.replace("index.html");
}