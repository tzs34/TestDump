import * as firebase from 'firebase';

export function addUserToDB(uid, data) {
  if (!uid || !data) { return Promise.reject("Missing uid/data"); }
  const { name, company, categories, retailers } = data;

  return firebase.database().ref('user/' + uid).set({
    name,
    company,
    categories,
    retailers
  }).then(() => {
    return Promise.resolve("Added user to db");
  }).catch(e => {
    console.log(e);
    return Promise.reject("Error adding user to db");
  });
}

export function getUserdata(uid) {
  if (!uid) { return null; }

  return firebase.database().ref('user/' + uid).once('value')
    .then(resp => {      
      return { uid, ...resp.val() } || null;
    });
}

export async function getCurrentUser() {
  if (firebase.auth().currentUser && firebase.auth().currentUser.uid) {
    return await getUserdata(firebase.auth().currentUser.uid);
  } else { 
    return null;
  }
}