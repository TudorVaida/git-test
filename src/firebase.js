// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// import firebase from "firebase/app";
// import "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: "AIzaSyBwM3RDHQ0y2Btu-oaxIvr1rUoBWagybjE",
	authDomain: "final-project---online-store.firebaseapp.com",
	databaseURL:
		"https://final-project---online-store-default-rtdb.europe-west1.firebasedatabase.app",
	projectId: "final-project---online-store",
	storageBucket: "final-project---online-store.appspot.com",
	messagingSenderId: "836064473409",
	appId: "1:836064473409:web:bd69758a8ac7fd4cadb1c0",
};

// firebase.initializeApp(firebaseConfig);
// export default firebase;

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);
export default db;
