import firebase from "firebase";
const firebaseConfig = {
    apiKey: "AIzaSyAqmb9Mnx9v65oHiI7tiztZ3PaQkW9Z3dg",
    authDomain: "fir-57e94.firebaseapp.com",
    projectId: "fir-57e94",
    storageBucket: "fir-57e94.appspot.com",
    messagingSenderId: "13060372909",
    appId: "1:13060372909:web:f92a4445b3ff964a930924"
};
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage().ref();

export { auth, provider, storage };
export default db;