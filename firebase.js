import * as firebase from 'firebase';
import 'firebase/firestore'

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyDNen2dRGDbUJYVy3zzAguKD3g5VonsRVc",
    authDomain: "portfolio-app-7ebf9.firebaseapp.com",
    projectId: "portfolio-app-7ebf9",
    storageBucket: "portfolio-app-7ebf9.appspot.com",
    messagingSenderId: "426717187072",
    appId: "1:426717187072:web:2aba6f69be6484b4c71ce5"
});

const db = firebase.firestore();

export {db};