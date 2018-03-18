

importScripts('https://www.gstatic.com/firebasejs/3.9.0/firebase-app.js'); 
importScripts('https://www.gstatic.com/firebasejs/3.9.0/firebase-messaging.js');


var config = {
    apiKey: "AIzaSyBFfQRMy1Bo2zHrTVpMvcnMRtNd40824Ow",
    authDomain: "chatapp-418a9.firebaseapp.com",
    databaseURL: "https://chatapp-418a9.firebaseio.com",
    projectId: "chatapp-418a9",
    storageBucket: "chatapp-418a9.appspot.com",
    messagingSenderId: "716791068276"
  };
var fire = firebase.initializeApp(config);
const messaging = fire.messaging()