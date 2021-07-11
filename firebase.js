import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCQbN2R12NF6uDAEWRiRwRrHhJI8Wwn03M",
  authDomain: "fir-15a1c.firebaseapp.com",
  projectId: "fir-15a1c",
  storageBucket: "fir-15a1c.appspot.com",
  messagingSenderId: "636588262944",
  appId: "1:636588262944:web:47feb583c214a3174cde45"
};
const app = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();

const db = app.firestore();

export default db;