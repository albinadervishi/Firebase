const firebase=require('firebase')

const firebaseConfig = {
    apiKey: "AIzaSyCxnyq0tiAisb2dmtCb0kqgSocn6E24y64",
    authDomain: "myproject-97191.firebaseapp.com",
    projectId: "myproject-97191",
    storageBucket: "myproject-97191.appspot.com",
    messagingSenderId: "325940717738",
    appId: "1:325940717738:web:2a1c7abbcf02efa4f008d3",
    measurementId: "G-9X492MRV8K"
  };

  firebase.initalizeApp(firebaseConfig);
  const db=firebase.firestore();
  const User=db.collection("Users");
  module.exports = User;