
import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth'

let firebaseConfig = {
  apiKey: "AIzaSyAe54EpW8B_pmYZd_ZEJ4pnSQhHMyom0a8",
  authDomain: "somativa-giovana-carmazio.firebaseapp.com",
  projectId: "somativa-giovana-carmazio",
  storageBucket: "somativa-giovana-carmazio.appspot.com",
  messagingSenderId: "881045528633",
  appId: "1:881045528633:web:2483cc5808a24116592de8"
};

if(!firebase.apps.length){
    firebase.initializeApp(firebaseConfig);
}

export default firebase;
