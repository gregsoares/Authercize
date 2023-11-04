import { users } from '../store'

// const apiUrl = 'http://api.vercel.com/v9/api'

const { addUser, addUserSecret } = users

type ApiResponseT = {
  status?: number
  message?: string
}

export const fetchAllUsers = (): ApiResponseT => {
  const allUsers = users.getUserList()
  const allUserSecrets = users.getUserSecretList()
  console.debug('allUsers', allUsers)
  console.debug('allUserSecrets', allUserSecrets)
  return {
    status: 200,
    message: 'All users returned',
  }
}

export const login = (email: '', password: ''): ApiResponseT => {
  const user = users.getUserList().find(user => user.email === email)
  if (!user) {
    return {
      status: 404,
      message: 'User not found',
    }
  }
  const { UUID } = user
  const userSecret = users.getUserSecretList().find(user => user.UUID === UUID)
  if (userSecret?.password !== password) {
    return {
      status: 401,
      message: 'Invalid password',
    }
  }
  console.debug('user', user)
  console.debug('userSecret', userSecret)
  return {
    status: 200,
    message: 'Login successful',
  }
}

export const registerUser = (email = '', password = ''): ApiResponseT => {
  if (!email || !password) {
    return {
      status: 400,
      message: 'Email and password required',
    }
  }
  const UUID = Math.random().toString(36).substring(7)
  addUser({
    UUID,
    email,
    type: 'user',
    isLoggedIn: false,
    accessToken: Math.random().toString(36).substring(7),
  })
  addUserSecret({
    UUID,
    email,
    password,
  })
  console.debug('users', users.getUserList())
  console.debug('userSecrets', users.getUserSecretList())
  return {
    status: 200,
    message: 'User created',
  }
}
