import * as firebase from 'firebase'

  var firebaseConfig = {
    apiKey: "AIzaSyCnoO1kKGYkZgP8awG9FViMcX5nOeZtZX0",
    authDomain: "therecordkeeper-ad648.firebaseapp.com",
    databaseURL: "https://therecordkeeper-ad648.firebaseio.com",
    projectId: "therecordkeeper-ad648",
    storageBucket: "therecordkeeper-ad648.appspot.com",
    messagingSenderId: "1082987392653",
    appId: "1:1082987392653:web:6114b45f43661b69ce3cc4",
    measurementId: "G-XZ1FR0V32E"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();

  export const database = firebase.database().ref('/notes')