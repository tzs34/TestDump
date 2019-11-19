import React from 'react';
import * as firebase from 'firebase';
import LandingPage from './LandingPage/landingPage';
import Calendar from './Calendar/Calendar';
import 'firebase/functions';
import './App.css';
import SignupPage from './Modal/SignupPage'
import Signin from './Modal/Signin'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import {googleSignin} from './User/SignIn';
import {getCurrentUser, addUserToDB} from './User/UserData';

const config = {
  apiKey: "AIzaSyDvwXUFsuB4-lKOIVczlmv8ZuUxB6-1ZiE",
  authDomain: "efundamentals-dev01.firebaseapp.com",
	region: "europe-west1",
  databaseURL: "https://efundamentals-dev01.firebaseio.com",
  projectId: "efundamentals-dev01",
  storageBucket: "efundamentals-dev01.appspot.com",
  messagingSenderId: "495088295082",
  appId: "1:495088295082:web:814779076f9a60015a84d3",
  measurementId: "G-2RBTDFREKH"
};

const fb = firebase.initializeApp(config);
window.firebase = fb;

const signIn = () => {
  googleSignin().then(uid => {
    const formData = {
      name: "Laurie McIver",
      company: "EF",
      categories: ["Pet"],
      retailers: ["ASDA", "Morrisons", "Tesco"]
    };
    addUserToDB(uid, formData).then(resp => console.log(resp));
  });
}

const check = () => {
  getCurrentUser().then(resp => console.log(resp));
}

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/signup">
            <SignupPage />
          </Route>
          <Route exact path="/signin">
            <Signin />
          </Route>
          <Route exact path="/signuptest">
            <button onClick={ () => signIn() }>Click to Sign In with Google</button>
            <button onClick={ () => check() }>Check User Signed In</button>
          </Route>
          <Route exact path="/demo">
            <Calendar firebase={fb}/>
          </Route>
          <Route exact path="/">
            <LandingPage />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
