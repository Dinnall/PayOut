import firebase from 'firebase'

const config = {
  apiKey: "AIzaSyDNJDyiATI9PAL6ZwMIFC_PqrBwQrUxMxk",
  authDomain: "join-collective.firebaseapp.com",
  databaseURL: "https://join-collective.firebaseio.com",
}

firebase.initializeApp(config)

export const ref = firebase.database().ref()
export const firebaseAuth = firebase.auth
