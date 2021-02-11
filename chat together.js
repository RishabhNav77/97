 // Your web app's Firebase configuration
 var firebaseConfig = {
    apiKey: "AIzaSyA_BgR4X1PT7nR1orfScg8NL6344aJV2O8",
    authDomain: "lets-chat-5be7b.firebaseapp.com",
    databaseURL: "https://lets-chat-5be7b-default-rtdb.firebaseio.com",
    projectId: "lets-chat-5be7b",
    storageBucket: "lets-chat-5be7b.appspot.com",
    messagingSenderId: "191233050455",
    appId: "1:191233050455:web:6ceceeffd40f2439262012"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

      user_name = localStorage.getItem("user_name");
      room_name = localStorage.getItem("room_name");   

function Send_message() {
        msg = document.getElementById("Type_message").value;
        firebase.database().ref(room_name).push({
              name : user_name,
              message : msg,
              like : 0
        });
        document.getElementById("Type_message").value = "";
}

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code
console.log(firebase_message_id);
  console.log(message_data);
  name = message_data["name"];
  message = message_data["message"];
  like = message_data["like"];
  name_tag = "<h4>" + name + "<img class='user_tick' src='tick.png'></h4>";
  message_tag = "<h4 class = 'message_h4'>" + message + "</h4>";
  like_button = "<button class='btn btn-warning' id=" + firebase_message_id + "value = "+like +"onclick='updatelike(this.id)'>";
  span_tag = "<span class = 'glyphicon glyphicon-thumbs-up'>LIKE:" + like +"</span></button><hr>";
  row = name_tag + message_tag + like_button + span_tag;
  document.getElementById("output").innerHTML += row;

//End code
      } });  }); }
getData();

function updatelike(message_id) {
      console.log("clicked on like button"  + message_id);
      button_id = message_id;
      likes = document.getElementById(button_id).value;
      updatedlikes = Number(likes) + 1;
      console.log(updatedlikes);
      firebase.database().ref(room_name).child(message_id).update({
            like : updated_likes
      });                                           
}

function logout_from_page() {
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "index.html";
}

getData();
