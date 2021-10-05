import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";

const config = {
	apiKey: "AIzaSyBOX4JHCowY9iPGpIsDx2aWBEP0u03NB3g",
	authDomain: "crwn-db-b6383.firebaseapp.com",
	projectId: "crwn-db-b6383",
	storageBucket: "crwn-db-b6383.appspot.com",
	messagingSenderId: "850002521331",
	appId: "1:850002521331:web:c67817526d58f4b0f19b86",
	measurementId: "G-3MEETBDV2X"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
