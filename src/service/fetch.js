import * as firebase from 'firebase';

async function prepareHeaders() {
  const headers = {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
  }
  const user = firebase.auth().currentUser
  let idToken
  if (user) {
    idToken = await user.getIdToken()
    headers['Authorization'] = `Bearer ${idToken}`
  }
  return headers
}

async function post(url, body, headers = {}) {
  const baseHeaders = await prepareHeaders()
  return fetch(url, {
    method: 'POST',
    headers: {
      ...baseHeaders,
      ...headers
    },
    body: JSON.stringify(body)
  }).then(resp => resp.json())
}

function callFunction(name, data = {}, region = 'europe-west1') {
  const url = `https://${region}-efundamentals-dev01.cloudfunctions.net/${name}`
  return post(url, { data })
}

export default { post, callFunction }