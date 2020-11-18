import firebase from "firebase";

var firebaseConfig = {
  apiKey: "AIzaSyDs9uC3Lq5eUdIZxk7Q_Sr_8qJFqs_0ogs",
  authDomain: "multicco-helper.firebaseapp.com",
  databaseURL: "https://multicco-helper.firebaseio.com",
  projectId: "multicco-helper",
  storageBucket: "multicco-helper.appspot.com",
  messagingSenderId: "518916493404",
  appId: "1:518916493404:web:21a38247658311081ed699",
  measurementId: "G-FTMGLW33YS",
};

const Fire = firebase.initializeApp(firebaseConfig);
firebase.analytics();

export default Fire;
