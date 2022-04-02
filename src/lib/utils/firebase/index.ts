import { initializeApp } from "firebase/app";
import type firebase from "firebase/app";

let app: firebase.FirebaseApp = null;

// fb initialization
export const initApp = (config: firebase.FirebaseOptions) => {
  if (!config) throw new Error('Firebase config is not defined');
  app = initializeApp(config);
  if (!app) throw new Error('Firebase init app error');
  return app
}

// get fb app instance
export const getApp = () => {
  if (!app) throw new Error('Firebase app is not initialized')
  return app
}

