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
//ADD YOUR FIREBASE LINKS HERE
user_name = localStorage.getItem("user_name");

document.getElementById("user_name").innerHTML = "Welcome "+ user_name + "!"

function addRoom(){
  room_name = document.getElementById("room_name").value;
  console.log(room_name)
  firebase.database().ref("/").child(room_name).update({
      purpose:"adding room name"
  })
  localStorage.setItem("room_name", room_name)
  window.location = "kwitter_page.html"
}


function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)'> #"+Room_names+"</div>"
document.getElementById("output").innerHTML +=row
      //End code
      });});}
getData();

function redirectToRoomName(name){
 localStorage.setItem("room_name", name)
 window.location = "kwitter_page.html"
}
function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location.replace("index.html");
      }