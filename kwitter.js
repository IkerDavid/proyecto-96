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

  function add_user(){
    user_name = document.getElementById("user_name").value;
    localStorage.setItem("user_name",user_name);
    window.location="kwitter_room.html";
}