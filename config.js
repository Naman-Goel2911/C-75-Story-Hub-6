import * as firebase from 'firebase'

var firebaseConfig = {
    apiKey: "AIzaSyA10rd-59l2tgELXqJTnEEhPPIEboWrI8I",
    authDomain: "story-hub-21b1d.firebaseapp.com",
    projectId: "story-hub-21b1d",
    storageBucket: "story-hub-21b1d.appspot.com",
    messagingSenderId: "768976879535",
    appId: "1:768976879535:web:aad03e0e5312c245da795a"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore();