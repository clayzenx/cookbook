import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { type UserCredential, type AuthError, sendEmailVerification } from "firebase/auth";

export const createUser = async (email: string, password: string): Promise<UserCredential | AuthError> => {
  return createUserWithEmailAndPassword(getAuth(), email, password)
    .then((userCredential: UserCredential) => {
      sendEmailVerification(getAuth().currentUser)
      return userCredential
    })
    .catch((error: AuthError) => {
      return error
    });
}

export const signInUser = async (email: string, password: string): Promise<UserCredential | AuthError> => {
  return signInWithEmailAndPassword(getAuth(), email, password)
    .then((userCredential: UserCredential) => {
      return userCredential
    })
    .catch((error: AuthError) => {
      return error
    });
}

