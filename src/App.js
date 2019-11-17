import React from 'react';
import * as firebase from 'firebase';
import logo from './logo.svg';
import Portal from './Portal/overlayPortal'
import Login from './Form/Login'
import './App.css';

const config = {
  apiKey: "AIzaSyDvwXUFsuB4-lKOIVczlmv8ZuUxB6-1ZiE",
  authDomain: "efundamentals-dev01.firebaseapp.com",
  databaseURL: "https://efundamentals-dev01.firebaseio.com",
  projectId: "efundamentals-dev01",
  storageBucket: "efundamentals-dev01.appspot.com",
  messagingSenderId: "495088295082",
  appId: "1:495088295082:web:814779076f9a60015a84d3",
  measurementId: "G-2RBTDFREKH"
};

firebase.initializeApp(config);

const provider = new firebase.auth.GoogleAuthProvider();

const signIn = () => {
  firebase.auth().signInWithPopup(provider).then(function(result) {
    console.log(result);
    
    // This gives you a Google Access Token. You can use it to access the Google API.
    var token = result.credential.accessToken;
    // The signed-in user info.
    var user = result.user;
    // ...
  }).catch(function(error) {
    console.log(error);

    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    // The email of the user's account used.
    var email = error.email;
    // The firebase.auth.AuthCredential type that was used.
    var credential = error.credential;
    // ...
  });
}



function App() {

  function onSubmitForm(e){
    console.log(e)
  }

  return (
    <div className="App">
      {/* <header className="App-header">
        <h1>Promo Genie</h1>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <button onClick={ () => signIn() }>Click to Sign In with Google</button>
      </header> */}
      <Portal>
        <Login onSubmit={onSubmitForm} />
      </Portal>
    </div>
  );
}

export default App;
