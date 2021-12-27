import fireBaseKey from '../../common/key.js';
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, signInWithPopup, GoogleAuthProvider, GithubAuthProvider, onAuthStateChanged } from "firebase/auth";

export default class Provider {
  constructor(name) {
    this.provider = name;
  }
  getAuth() {
    const firebaseConfig = {
      apiKey: fireBaseKey,
      authDomain: "card-maker-4ef4a.firebaseapp.com",
      projectId: "card-maker-4ef4a",
      storageBucket: "card-maker-4ef4a.appspot.com",
      messagingSenderId: "618513089919",
      appId: "1:618513089919:web:ed5791f54dbdbe4bf2064a",
      measurementId: "G-2DHTH5PDT7"
    };

    const provider = this.provider === "google" ? new GoogleAuthProvider() : new GithubAuthProvider();
    const app = initializeApp(firebaseConfig);
    const analytics = getAnalytics(app);
    const authProvider = this.provider === "google" ? GoogleAuthProvider : GithubAuthProvider;

    const auth = getAuth();

    return signInWithPopup(auth, provider)
    .then((result) => {
    const credential = authProvider.credentialFromResult(result);
    const token = credential.accessToken;
    const user = result.user;
    return user;
    })
    .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    const email = error.email;
    const credential = authProvider.credentialFromError(error);
  });
  
  }
}