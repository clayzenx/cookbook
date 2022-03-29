import { initializeApp } from "firebase/app";
import { firebaseConfig } from "$lib/fb";

let app = null;

// get fb app instance
export const getApp = () => app ? app : (app = initializeApp(firebaseConfig), app)
