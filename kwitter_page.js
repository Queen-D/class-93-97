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
    //YOUR FIREBASE LINKS
user_name=localStorage.getItem("user_name");
room_name=localStorage.getItem("room_name");
function send(){
      msg=document.getElementById("msg").value ;
      firebase.database().ref(room_name).push({
  name:user_name,
  message:msg,
  like:0
      }) ;
 document.getElementById("msg").value="";
}
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code
console.log(firebase_message_id);
console.log(message_data);
name=message_data['name'];
message=message_data['message'];
like=message_data['like'];
 verify="<h4>"+name+"<img class='user_tick' src='tick.png'></h4>";
 mes="<h4 class='message_h4'>"+message+"</h4>";
 likebtn="<button class='btn btn-danger' id="+firebase_message_id+" value="+like+" onclick='updatelikes(this.id)'>";
 llo="<span class='glyphicon glyphicon-thumbs-up'>Like:"+like+"</span></button><hr>";
 row=verify+mes+likebtn+llo;
 document.getElementById("output").innerHTML +=row;
//End code
      } });  }); }
getData();
function updatelikes(message_id){
      console.log(message_id);
      button_id=message_id;
      likes=document.getElementById(button_id).value ;
      updatedlikes=Number(likes)+1;

      firebase.database().ref(room_name).child(message_id).update({
            like:updatedlikes
                }) ;
}
function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location="index.html";
    }