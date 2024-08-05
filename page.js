const firebaseConfig = {
    apiKey: "AIzaSyD9J24XS0hS3516d9XJOkBQKoemFGCDoyw",
    aucthDomain: "practica-94-d2c2d.firebaseapp.com",
    databaseURL: "https://practica-94-d2c2d-default-rtdb.firebaseio.com",
    projectId: "practica-94-d2c2d",
    storageBucket: "practica-94-d2c2d.appspot.com",
    messagingSenderId: "989394828674",
    appId: "1:989394828674:web:9ad9385b254c95c277e39b"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
//TUS ANLACES DE FIREBASE
user_name = localStorage.getItem("user_name");
room_name = localStorage.getItem("room_name");
function send(){
    msg = document.getElementById("msg").value;
    firebase.database().ref(room_name).push({
          name:user_name,
          message: msg,
          like: 0
    })};