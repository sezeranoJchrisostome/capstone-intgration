
// https://firebase.google.com/docs/web/setup#available-libraries


/* Initialize Database  */
const app = firebase.initializeApp(firebaseConfig);
const database = app.database();
const auth = firebase.auth();
const userTable = database.ref('users');
const googleProvider = new firebase.auth.GoogleAuthProvider();


