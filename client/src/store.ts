import { Signal } from '@preact/signals-react'
import { staticUserList, staticUserSecretList } from './constants/userList.js'

type UserSecretT = { UUID: string; email: string; password: string }
const userSecret: UserSecretT[] = [...staticUserSecretList]

type UserT = {
  UUID: string
  email: string
  type?: string
  isLoggedIn?: boolean
  accessToken?: string
}

const userList: UserT[] = [...staticUserList]
const state = new Signal(userList)

export const showLoginForm = new Signal(false)
export const showRegisterForm = new Signal(false)
export const userLoggedIn = new Signal(
  userList.find(users => users.isLoggedIn) || false
)

export const loggedInUser = {
  subscribe: userLoggedIn.subscribe,
  getUser: () => {
    return userList.find(user => user.isLoggedIn)
  },
  logout: (): boolean => {
    const user = userList.find(user => user.isLoggedIn)
    if (!user) return false
    users.updateIsLoggedIn(user.UUID, false)
    return true
  },
}

export const users = {
  subscribe: state.subscribe,
  addUser: (user: UserT) => {
    userList.push(user)
  },
  removeUser: (UUID: string) => {
    const index = userList.findIndex(user => user.UUID === UUID)
    userList.splice(index, 1)
  },
  getUser: (UUID: string) => {
    return userList.find(user => user.UUID === UUID)
  },
  getUserList: () => {
    return userList
  },
  getUserSecret: (UUID: string) => {
    return userSecret.find(user => user.UUID === UUID)
  },
  addUserSecret: (user: UserSecretT) => {
    userSecret.push(user)
  },
  removeUserSecret: (UUID: string) => {
    const index = userSecret.findIndex(user => user.UUID === UUID)
    userSecret.splice(index, 1)
  },
  getUserSecretList: () => {
    return userSecret
  },
  updateIsLoggedIn: (UUID: string, isLoggedIn: boolean) => {
    const index = userList.findIndex(user => user.UUID === UUID)
    userList[index].isLoggedIn = isLoggedIn
    console.debug('updated userList:', userList)
  },
}
