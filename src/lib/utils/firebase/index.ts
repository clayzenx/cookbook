import { initializeApp } from "firebase/app";
import type firebase from "firebase/app";
import type firebaseAuth from "firebase/auth";
import { firebaseConfig } from "$lib/fb";

// fb modules import
import { getAuth } from "firebase/auth";

// fb instances
let app: firebase.FirebaseApp = null;

// fb initialization
const initApp = (config: firebase.FirebaseOptions) => {
  if (!config) throw new Error('Firebase config is not defined');
  app = initializeApp(config);
  if (!app) throw new Error('Firebase init app error');

  // fb modules
  const auth: firebaseAuth.Auth = getAuth(app);
  if (!auth) throw new Error('Firebase init authentification error');

  return app
}

// get fb app instance
export const getApp = () => {
  try {
    if (!app) app = initApp(firebaseConfig)
  } catch (e) { console.error(e) }

  return app
}

