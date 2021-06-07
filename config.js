import firebase from 'firebase';
require('@firebase/firestore')


  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyCN09R1PEfdOURjdymAD43-vZjHJRAcFjU",
    authDomain: "quizapp-e7965.firebaseapp.com",
    projectId: "quizapp-e7965",
    storageBucket: "quizapp-e7965.appspot.com",
    messagingSenderId: "901015389020",
    appId: "1:901015389020:web:d534f9fbe08d1e6099f799"
  };

  // Initialize Firebase
  
  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore();