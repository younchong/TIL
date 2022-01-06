import {authFirebase} from "./firebase.js"
import { signInWithPopup, GoogleAuthProvider, getAuth  } from "firebase/auth";

export default class AuthService {
  constructor() {
    this.firebaseAuth = getAuth();
    this.googleProvider = new GoogleAuthProvider();
  }
  login(providerName) {
    const provider = new GoogleAuthProvider()
    return signInWithPopup(this.firebaseAuth, this.getProvider(providerName))
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

