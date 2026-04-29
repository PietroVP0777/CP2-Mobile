import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getDatabase } from 'firebase/database';

const firebaseConfig = {
  apiKey: "AIzaSyC_9QuyN-agBXzUMU8uVCkF1Wfh68gWbSA",
  authDomain: "fiap-aulas-cc997.firebaseapp.com",
  databaseURL: "https://fiap-aulas-cc997-default-rtdb.firebaseio.com",
  projectId: "fiap-aulas-cc997",
  storageBucket: "fiap-aulas-cc997.firebasestorage.app",
  messagingSenderId: "87746248319",
  appId: "1:87746248319:web:104fba5e80be6e9c10894a",
  measurementId: "G-QJ9F2MG50Q"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getDatabase(app);

export { auth, db };
