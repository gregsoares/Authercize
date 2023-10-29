//exported fetch function to get data from API /users

import { ApiErrorT } from '../types'

export const fetchAllUsers = (): Promise<void> =>
  fetch('http://localhost:3000/users')
    .then(res => res.json())
    .then(data => data)
    .catch(err => {
      const error: ApiErrorT = { message: err.message }
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
