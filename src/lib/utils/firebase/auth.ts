import type { Auth } from "firebase/auth";
import type { FirebaseApp } from "firebase/app";
import { getAuth } from "firebase/auth";

export const initAuth = (app: FirebaseApp) => {
  const auth: Auth = getAuth(app);
  if (!auth) throw new Error('Firebase init authentification error');
}


