import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import { getStorage } from "firebase/storage";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
    apiKey: "AIzaSyBUacE37sPqRtzkm8OYI2MVslRDbnBeSMo",
    authDomain: "ssdc-sliet-web.firebaseapp.com",
    projectId: "ssdc-sliet-web",
    storageBucket: "ssdc-sliet-web.appspot.com",
    messagingSenderId: "658077656340",
    appId: "1:658077656340:web:a9196f17e67eda761b4e01",
    measurementId: "G-CNS8D9CE1D"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = getStorage(firebaseApp)
const googleProvider = new firebase.auth.GoogleAuthProvider();
const githubProvider = new firebase.auth.GithubAuthProvider();
const facebookProvider = new firebase.auth.FacebookAuthProvider();
const twitterProvider = new firebase.auth.TwitterAuthProvider();
const analytics = getAnalytics(firebaseApp);

export { auth, googleProvider, githubProvider, facebookProvider, twitterProvider, storage, analytics }
export default db;