import { getAuth, signInWithPopup, GoogleAuthProvider, type AuthError, type UserCredential } from "firebase/auth";

export const signInUser = async (): Promise<UserCredential | AuthError> => {

  const provider = new GoogleAuthProvider();
  const auth = getAuth();

  return signInWithPopup(auth, provider)
    .then((userCredential: UserCredential) => {
      return userCredential
    }).catch((error: AuthError) => {
      return Promise.reject(error)
    });

}
