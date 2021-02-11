var firebaseConfig = {
    apiKey: "AIzaSyCGpcP4Difj89Q_QLwGv_BfjcW_9MpxKXg",
    authDomain: "kwitter-3e712.firebaseapp.com",
    databaseURL: "https://kwitter-3e712-default-rtdb.firebaseio.com",
    projectId: "kwitter-3e712",
    storageBucket: "kwitter-3e712.appspot.com",
    messagingSenderId: "699111657353",
    appId: "1:699111657353:web:539eb27eaf00807ae91b58"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
//ADD YOUR FIREBASE LINKS HERE
user_name = localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";
function addroom() {
  Room_name = document.getElementById("room_name").value;
  firebase.database().ref("/").child(Room_name).update({
        purpose : "adding room name"
  });
  localStorage.setItem("room_name",Room_name);
  window.location = "chat in lets chat.html";
  
  
}
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
     Room_names = childKey;
    //Start code
    console.log("room name - " + Room_names);
    row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)'>#" + Room_names + "</div> <hr> ";
    document.getElementById("output").innerHTML += row;

    //End code
    });});}
getData();

function redirectToRoomName(name) {
    console.log(name);
    localStorage.setItem("room_name",name);
    window.location = "chat in lets chat.html";
} ;