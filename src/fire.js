import firebase from 'firebase'
var config = {
    apiKey: "AIzaSyBcw4L-I1-FsAQ9Bq83kBHRWpcy4dyLTiY",
    authDomain: "react-fire-afcc9.firebaseapp.com",
    databaseURL: "https://react-fire-afcc9.firebaseio.com",
    projectId: "react-fire-afcc9",
    storageBucket: "react-fire-afcc9.appspot.com",
    messagingSenderId: "199351382930"
  };
var fire = firebase.initializeApp(config);
export default fire;