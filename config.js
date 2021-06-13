import firebase from 'firebase';

 var firebaseConfig = {
    apiKey: "AIzaSyCvv6O7CV7f3iFpiMx1KuHlxtxUl1E9Oak",
    authDomain: "buzzer-admin-3e203.firebaseapp.com",
    databaseURL: "https://buzzer-admin-3e203-default-rtdb.firebaseio.com",
    projectId: "buzzer-admin-3e203",
    storageBucket: "buzzer-admin-3e203.appspot.com",
    messagingSenderId: "644942694772",
    appId: "1:644942694772:web:d32504cd4aadeeeb288421",
    measurementId: "G-7EYZD9XXG6"
  };

// Initialize Firebase
let app = firebase.initializeApp(firebaseConfig);
export default app.database();
