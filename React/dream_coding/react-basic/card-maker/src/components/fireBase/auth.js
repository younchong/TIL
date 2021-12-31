import fireBaseKey from '../../common/key.js';
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, signInWithPopup, GoogleAuthProvider, GithubAuthProvider, onAuthStateChanged } from "firebase/auth";
import { getDatabase, ref, set, child, get } from "firebase/database";

export default class Firebase {
  constructor(name) {
    this.provider = name;
    this.firebaseConfig = {
      apiKey: fireBaseKey,
      authDomain: "card-maker-4ef4a.firebaseapp.com",
      projectId: "card-maker-4ef4a",
      databaseURL: "https://databaseName.firebaseio.com",
      storageBucket: "card-maker-4ef4a.appspot.com",
      messagingSenderId: "618513089919",
      appId: "1:618513089919:web:ed5791f54dbdbe4bf2064a",
      measurementId: "G-2DHTH5PDT7"
    };
    
  }
  async getAuth() {
    const provider = this.provider === "google" ? new GoogleAuthProvider() : new GithubAuthProvider();
    const app = initializeApp(this.firebaseConfig);
    const analytics = getAnalytics(app);
    const authProvider = this.provider === "google" ? GoogleAuthProvider : GithubAuthProvider;

    const auth = getAuth();

    try {
      const result = await signInWithPopup(auth, provider);
      const credential = authProvider.credentialFromResult(result);
      const token = credential.accessToken;
      const user = result.user;
      return user;
    } catch (error) {
      const errorCode = error.code;
      const errorMessage = error.message;
      const email = error.email;
      const credential_1 = authProvider.credentialFromError(error);
    }
  
  }
  storeData(informations) {
    const app = initializeApp(this.firebaseConfig);  
    function writeUserData(userId, data) {
      const db = getDatabase(app);
      set(ref(db, "users/" + userId), {
        data
      });
    }
    
    writeUserData(this.name, informations);
  }
  getData() {
    const app = initializeApp(this.firebaseConfig);
    const db = getDatabase(app);
    const dbRef = ref(db);
    return get(child(dbRef, `users/${this.name}`)).then((snapshot) => {
      if (snapshot.exists()) {
         return snapshot.val();
      } else {
        console.log("No data available");
      }
      }).catch((error) => {
        console.error(error);
      });

  }
}