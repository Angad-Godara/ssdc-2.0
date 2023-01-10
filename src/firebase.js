import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyC7dTBtGk1tIiFHZTthYiNT9eMSAV36_js",
    authDomain: "playground-a2b10.firebaseapp.com",
    projectId: "playground-a2b10",
    storageBucket: "playground-a2b10.appspot.com",
    messagingSenderId: "592414553851",
    appId: "1:592414553851:web:939a86eb2589ef8480625e"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const googleProvider = new firebase.auth.GoogleAuthProvider();
const githubProvider = new firebase.auth.GithubAuthProvider();
const facebookProvider = new firebase.auth.FacebookAuthProvider();
const twitterProvider = new firebase.auth.TwitterAuthProvider();

export { auth, googleProvider, githubProvider, facebookProvider, twitterProvider }
export default db;