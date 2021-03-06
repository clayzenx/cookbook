/// <reference types="@sveltejs/kit" />

// See https://kit.svelte.dev/docs/types#the-app-namespace
// for information about these interfaces
declare namespace App {
  // interface Locals {}
  // interface Platform {}
  // interface Session {}
  // interface Stuff {}
}
declare enum LOGINFORMTYPE {
  SIGNUP,
  SIGNIN
}
declare interface ILoginFormData {
  email?: string,
  password?: string,
  login?: string,
}
declare interface IUser {
  email?: string,
  displayName?: string,
  image?: string
}

