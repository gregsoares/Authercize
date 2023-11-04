import { addUser } from '../store'

const apiUrl = 'http://localhost:9021/api'

type ApiResponseT = {
  status?: number
  message?: string
}

export const fetchAllUsers = (): Promise<ApiResponseT> =>
  fetch(`${apiUrl}/users`)
    .then(data => data.json())
    .then(data => ({ status: 200, data }))
    .catch(err => ({ status: 400, message: err.message }))

export const loginAuth = (email: '', password: ''): Promise<ApiResponseT> => {
  const data = { email, password }
  return fetch(`${apiUrl}/login`, {
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

export const registerUser = (email = '', password = '') => {
  const data = { email, password }
  if (!email || !password) {
    return Promise.reject({
      status: 400,
      message: 'Email and password required',
    })
  }
  return fetch(`${apiUrl}/register`, {
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
        email,
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
