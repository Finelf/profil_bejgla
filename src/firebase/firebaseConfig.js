import * as firebase from 'firebase';
//import firestore from 'firebase/firestore;'

const firebaseConfig = {
    apiKey: "AIzaSyBtL0suc3H0NTQ4XPvRRQY4aMiGKIRbeBE",
    authDomain: "profilbejgla.firebaseapp.com",
    databaseURL: "https://profilbejgla.firebaseio.com",
    projectId: "profilbejgla",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

export default firebaseApp

export const db = firebase.firestore();
//const auth = firebase.auth();

