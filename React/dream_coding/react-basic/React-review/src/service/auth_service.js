import {authFirebase} from "./firebase.js"
import { signInWithPopup, GoogleAuthProvider, getAuth, signOut  } from "firebase/auth";

export default class AuthService {
  constructor() {
    this.firebaseAuth = getAuth();
    this.googleProvider = new GoogleAuthProvider();
  }
  login(providerName) {
    const provider = this.getProvider(providerName)
    return signInWithPopup(this.firebaseAuth, provider)
  }

  async logout() {
    try {
      const res = await signOut(this.firebaseAuth);
    } catch (err) {
      console.log(err);
    }
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

