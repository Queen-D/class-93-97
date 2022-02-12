// Your web app's Firebase configuration
var firebaseConfig = {
      apiKey: "AIzaSyDfTOVnHzIo3vWdAxjqCUPpHLh4xYXWXJQ",
      authDomain: "kwitternew-4e9ab.firebaseapp.com",
      databaseURL: "https://kwitternew-4e9ab-default-rtdb.firebaseio.com",
      projectId: "kwitternew-4e9ab",
      storageBucket: "kwitternew-4e9ab.appspot.com",
      messagingSenderId: "316151861114",
      appId: "1:316151861114:web:4109216e34a6c7e74d10c3"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
//ADD YOUR FIREBASE LINKS HERE
user_name=localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML="Welcome "+"@"+user_name+"!";
function addroom(){
      room_name=document.getElementById("room_name").value ;
    firebase.database().ref("/").child(room_name).update({
    purpose:"addingroom"
    }) ;
    localStorage.setItem("room_name",room_name);
    window.location="kwitter_page.html";
}
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
console.log(Room_names);
row="<div class='room_name' id="+Room_names+" onclick='redirect(this.id)'>#"+Room_names+"</div> <hr>";
      //End code
      });});}
getData();

function redirect(name){
 console.log(name);   
 localStorage.setItem("room_name",name);
 window.location="kwitter_page.html";
}

function logout(){
  localStorage.removeItem("user_name");
  localStorage.removeItem("room_name");
  window.location="index.html";
}