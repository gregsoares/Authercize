import { addUser } from '../store'

const isDeployed =
  process.env.VERCEL_ENV === 'production' ||
  process.env.VERCEL_ENV === 'preview' ||
  process.env.VERCEL_ENV === 'main'
const host = isDeployed ? 'authercize.vercel.app' : 'localhost'

const apiUrl = `https://${host}:9021/api`

type ApiResponseT = {
  status?: number
  message?: string
}

export const fetchAllUsers = (): Promise<ApiResponseT> =>
  fetch(`${apiUrl}/users`)
    .then(data => data.json())
    .then(data => ({ status: 200, data }))
    .catch(err => ({ status: 400, message: err.message })
    }) as Promise<ApiResponseT>

export const loginAuth = (
  email: string,
  password: string
): Promise<ApiResponseT> => {
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
