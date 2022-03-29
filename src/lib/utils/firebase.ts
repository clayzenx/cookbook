import { initializeApp } from "firebase/app";
import type firebase from "firebase/app";
import { getAuth, inMemoryPersistence, setPersistence } from "firebase/auth";
import { firebaseConfig } from "$lib/fb";


let app: firebase.FirebaseApp = null;

const initApp = (config: firebase.FirebaseOptions) => {
  if (!config) throw new Error('Firebase config is not defined')
  app = initializeApp(config);
  if (!app) throw new Error('Firebase init app error')
  return app
}

// get fb app instance
export const getApp = () => {
  try {
    if (!app) app = initApp(firebaseConfig)
  } catch (e) { console.error(e) }

  return app
}

