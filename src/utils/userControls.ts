import { addUser } from '../store'

type ApiResponseT = {
  status?: number
  message?: string
}

export const fetchAllUsers = (): Promise<void> =>
  fetch('http://localhost:3000/users')
    .then(data => data.json())
    .catch(err => {
      return { status: 400, ...err }
    })

export const loginAuth = (email: string, password: string): Promise<void> => {
  const data = { email, password }
  return fetch('http://localhost:3000/login', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  })
    .then(res => res.json())
    .then(data => {
      return data
    })
    .catch(err => {
      return { message: err.message }
    })
}

export const registerUser = (
  email: string = '',
  password: string = ''
): Promise<ApiResponseT> => {
  const data = { email, password }
  if (!email || !password) {
    return Promise.reject({
      status: 400,
      message: 'Email and password required',
    })
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
