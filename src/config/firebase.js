import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
import "firebase/database";

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyCnTNf6dh_LkePufiwLsBFyHJPCtpJ83vM",
  authDomain: "wishplan-react-redux.firebaseapp.com",
  databaseURL: "https://wishplan-react-redux.firebaseio.com",
  projectId: "wishplan-react-redux",
  storageBucket: "wishplan-react-redux.appspot.com",
  messagingSenderId: "953941499765",
  appId: "1:953941499765:web:fbadaf3e1963046d7ffd3c",
  measurementId: "G-RD3PMVK1WN",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.firestore();

export default firebase;
