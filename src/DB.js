import firebase from "firebase/app";
import "firebase/database";

const firebaseConfig = {
    apiKey: "AIzaSyApp4bqbjlOqNiw0SlquowFNjzFazKhhGM",
    authDomain: "crowddots.firebaseapp.com",
    databaseURL: "https://crowddots-default-rtdb.firebaseio.com",
    projectId: "crowddots",
    storageBucket: "crowddots.appspot.com",
    messagingSenderId: "481292000540",
    appId: "1:481292000540:web:e4dd670ed1dd2c1422aed9",
    measurementId: "G-6RF0NTL0LC"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
export const db = firebase.database();
export const get_data = () => db.ref().get()

