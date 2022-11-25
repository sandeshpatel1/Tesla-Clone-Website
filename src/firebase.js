import  firebase  from 'firebase/compat/app';
import 'firebase/compat/auth';

const firebaseConfig = {
  apiKey: "AIzaSyAqmIGpTtk_dKfqAEcfiM-npklpaYPGc3o",
  authDomain: "tesla-clone-7dafa.firebaseapp.com",
  projectId: "tesla-clone-7dafa",
  storageBucket: "tesla-clone-7dafa.appspot.com",
  messagingSenderId: "116221859590",
  appId: "1:116221859590:web:ef2a27017558e536daf087"
};


const firebaseApp = firebase.initializeApp(firebaseConfig)

const auth = firebaseApp.auth()

export { auth }

