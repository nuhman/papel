import firebase from "firebase";

let app, db, expensesRef;

if (!firebase.apps.length) {
  app = firebase.initializeApp({
    apiKey: "AIzaSyCpXXZq-uBef7wMXS5ZQ-zS6az9br33rqM",
    authDomain: "papelproid.firebaseapp.com",
    databaseURL: "https://papelproid.firebaseio.com",
    projectId: "papelproid",
    storageBucket: "papelproid.appspot.com",
    messagingSenderId: "749936182587"
  });
  db = app.database();
  expensesRef = db.ref("expenses");
} else {
  db = firebase.app().database();
  expensesRef = db.ref("expenses");
}

export { db, expensesRef };
