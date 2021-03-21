//YOUR FIREBASE LINKS
var firebaseConfig = {
      apiKey: "AIzaSyAFIebeEXtg8VoatepATbfwkKUxmcPhlzI",
      authDomain: "kwitter-5f31f.firebaseapp.com",
      databaseURL: "https://kwitter-5f31f-default-rtdb.firebaseio.com",
      projectId: "kwitter-5f31f",
      storageBucket: "kwitter-5f31f.appspot.com",
      messagingSenderId: "609402790243",
      appId: "1:609402790243:web:8706c528867fe6efe3f356"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

    user_name = localStorage.getItem("user-name")
    room_name = localStorage.getItem("room_name")

    function send()
    {
          msg = document.getElementById("msg").value;
          console.log(user_name);
          firebase.database().ref(room_name).push({
                name:user_name,
                message:msg,
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

function logout()
{
      localStorage.removeItem("user_name");
      localStorage.removeItem("user_name");
      window.location = "index.html";
}
