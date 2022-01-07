import {authFirebase} from "./firebase.js"
import { signInWithPopup, GoogleAuthProvider, getAuth  } from "firebase/auth";

export default class AuthService {
  constructor() {
    this.firebaseAuth = getAuth();
    this.googleProvider = new GoogleAuthProvider();
  }
  login(providerName) {
    const provider = this.getProvider(providerName)
    return signInWithPopup(this.firebaseAuth, provider)
  }

  logout() {
    this.firebaseAuth.signOut()
      .then((res) => {
        console.log(res);
      }).catch((err) => {
        console.log(err)
      });
  }

  getProvider(providerName) {
    switch(providerName) {
      case "Google":
        return this.googleProvider;
      default:
        throw new Error(`not support ${providerName}`);
    }
  }
}

