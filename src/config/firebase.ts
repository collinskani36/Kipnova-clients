import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Public Firebase Web config — intentionally client-safe.
// The real secret (service account) lives only in Render env vars.
const firebaseConfig = {
  apiKey: "AIzaSyDYBmfATqh9fRKw45LU_yhUhnwpdHYHdlk",
  authDomain: "mku-auto.firebaseapp.com",
  projectId: "mku-auto",
  storageBucket: "mku-auto.firebasestorage.app",
  messagingSenderId: "158249341040",
  appId: "1:158249341040:web:0ccf9eb0db74132c0be4b5",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
