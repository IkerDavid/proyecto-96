const firebaseConfig = {
    apiKey: "AIzaSyAngcLBWob8RxMlYHxvj_7XQd5lSjSOzOU",
    authDomain: "proyecto-94.firebaseapp.com",
    databaseURL: "https://proyecto-94-default-rtdb.firebaseio.com",
    projectId: "proyecto-94",
    storageBucket: "proyecto-94.appspot.com",
    messagingSenderId: "620541339294",
    appId: "1:620541339294:web:228d737058d77f824e3d8f",
    measurementId: "G-XMYBWBQHW8"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

user_name = localStorage.getItem("user_name");
document.getElementById("usuario").innerHTML = "¡Hola "+ user_name + "!";
function add_room(){
      room_name = document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({ 
            purpose : "adding room name" 
      });
      localStorage.setItem("room_name", room_name);
      window.location="page.html";
}

function getData() {
      firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Inicio del código
      //console.log("Nombres de salas"+ Room_names);
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
      document.getElementById("output").innerHTML += row;
      //Final del código
      });});}
getData();

function redirectToRoomName(name){
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location="kwitter_page.html";
}

function logout(){
      localStorage.removeItem("room_name");
      localStorage.removeItem("user_name");
      window.location="index.html";
  }