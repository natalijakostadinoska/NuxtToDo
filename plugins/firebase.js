import firebase from 'firebase/app';

var firebaseConfig = {
    apiKey: "AIzaSyD7Eqm4dUy0UYnVQ6VVtlMMqwjpVTzlvfg",
    authDomain: "nuxttodo-44cce.firebaseapp.com",
    projectId: "nuxttodo-44cce",
    storageBucket: "nuxttodo-44cce.appspot.com",
    messagingSenderId: "91279058588",
    appId: "1:91279058588:web:fe40f1bfbc06755e586f59",
    measurementId: "G-7WP9CPLQ4C"
  };

  var app=null;

  if(!firebase.apps.length){
      app = firebase.initializeApp(firebaseConfig);
  }
 