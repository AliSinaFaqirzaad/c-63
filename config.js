import firebase from 'firebase';


// For Firebase JS SDK v7.20.0 and later, measurementId is optional
var firebaseConfig = {
  apiKey: "AIzaSyB3acx3jGuZn8j28DqHTp3j3kbVifnB8ro",
  authDomain: "sa-app-69280.firebaseapp.com",
  databaseURL: "https://sa-app-69280-default-rtdb.firebaseio.com",
  projectId: "sa-app-69280",
  storageBucket: "sa-app-69280.appspot.com",
  messagingSenderId: "203441928644",
  appId: "1:203441928644:web:e9445cd0ba094a65c60c91",
  measurementId: "G-YQHXRX68ZP"
};


// Initialize Firebase
if(!firebase.apps.length){
  firebase.initializeApp(firebaseConfig);
}

export default  firebase.database()
 

  