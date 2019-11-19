import * as firebase from 'firebase';

export function emailSignin(email, password) {
  return firebase.auth().createUserWithEmailAndPassword(email, password)
    .then(function (resp) {
      return resp.user.uid;
    });
}

export function emailLogin(email, password) {
  return firebase.auth().signInWithEmailAndPassword(email, password);
}

export function googleSignin() {
  const provider = new firebase.auth.GoogleAuthProvider();

  return firebase.auth().signInWithPopup(provider)
  .then(function(resp) {
    return {
      uid: resp.user.uid,
      name: resp.user.displayName
    };
  });
}