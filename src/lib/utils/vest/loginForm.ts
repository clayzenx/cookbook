import { create, test, enforce } from 'vest';

export const emailValidator = create(email => {
  test('email', 'Email is required', () => {
    enforce(email).isNotBlank();
  })
})

export const passwordValidator = create(password => {
  test('password', 'Password is required', () => {
    enforce(password).isNotBlank();
  })
})
