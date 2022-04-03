enum STATUSCODE {
  'UNDEFINEDERROR',
  'EMAILALREADYINUSE',
  'INVALIDEMAIL',
  'WEEKPASSWORD',
  'WRONGPASSWORD',
  'USERNOTFOUND'
}

type ERRORTYPE = 'auth';
type ERRORLOCATION = 'email' | 'login' | 'password';

export interface ERROR {
  type: ERRORTYPE,
  location?: ERRORLOCATION,
  message: string,
}

const getErrorFromStatusCode = (status: STATUSCODE): ERROR => {
  switch (status) {
    case STATUSCODE.EMAILALREADYINUSE:
      return {
        type: 'auth',
        location: 'email',
        message: 'email already in use'
      }
    case STATUSCODE.INVALIDEMAIL:
      return {
        type: 'auth',
        location: 'email',
        message: 'email is not valid'
      }
    case STATUSCODE.WEEKPASSWORD:
      return {
        type: 'auth',
        location: 'password',
        message: 'password should be at least 6 characters'
      }
    case STATUSCODE.WRONGPASSWORD:
      return {
        type: 'auth',
        location: 'password',
        message: 'invalid password'
      }
    case STATUSCODE.USERNOTFOUND:
      return {
        type: 'auth',
        location: 'email',
        message: 'user not found'
      }
  }
}


export const getErrorFromCode = (code: string): ERROR => {
  let status = 0
  switch (code) {
    case 'auth/email-already-in-use':
      status = STATUSCODE.EMAILALREADYINUSE
      break;
    case 'auth/invalid-email':
      status = STATUSCODE.INVALIDEMAIL
      break;
    case 'auth/wrong-password':
      status = STATUSCODE.WRONGPASSWORD
      break;
    case 'auth/weak-password':
      status = STATUSCODE.WEEKPASSWORD
      break;
    case 'auth/user-not-found':
      status = STATUSCODE.USERNOTFOUND
      break;
  }

  return getErrorFromStatusCode(status)

}
