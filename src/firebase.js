import * as firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'

firebase.initializeApp({
    apiKey: "AIzaSyAsj7qJ0hwPwQpqObp_qzhmoZjzLsccCvM",
    authDomain: "jsf-787878787878787878.firebaseapp.com",
    projectId: "jsf-787878787878787878",
    storageBucket: "jsf-787878787878787878.appspot.com",
    messagingSenderId: "507352078359",
    appId: "1:507352078359:web:5b816c25c93216ab75a452"
  })

  // add more.. like db.collection('nameofcollection'), and export
const db = firebase.firestore()
const auth = firebase.auth()
export { db, auth }