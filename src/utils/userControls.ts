import { ApiErrorT } from '../types'
import { addUser } from '../store'

export const fetchAllUsers = (): Promise<void> =>
  fetch('http://localhost:3000/users')
    .then(data => data.json())
    .catch(err => {
      const error: ApiErrorT = { status: 400, ...err }
      return error
    })

export const loginAuth = (email: string, password: string): Promise<void> => {
  const data = { email, password }
  return fetch('http://localhost:3000/login', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  })
    .then(res => res.json())
    .then(data => data)
    .catch(err => {
      const error: ApiErrorT = { message: err.message }
      return error
    })
}

export const registerUser = (
  email: string = '',
  password: string = ''
): Promise<void> => {
  const data = { email, password }
  if (!email || !password) {
    const error: ApiErrorT = { message: 'Email and password required' }
    return Promise.reject({ status: 400, error })
  }
  return fetch('http://localhost:3000/register', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  })
    .then(res => res.json())
    .then(data => {
      console.debug('addinG user to store: ', data)
      if (data.status === 400 || !data.status) {
        return data
      }
      addUser({
        UUID: Math.random().toString(36).substring(7),
        email: email,
        type: 'user',
        isLoggedIn: false,
        accessToken: 'SomeRandom alphanumeric string',
      })
      return data
    })
    .catch(err => {
      return { status: 400, err }
    })
}
