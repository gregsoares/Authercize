import { Signal } from '@preact/signals-react'

type UserSecretT = { UUID: string; email: string; password: string }
const userSecret: UserSecretT[] = []

type UserT = {
  UUID: string
  email: string
  type?: string
  isLoggedIn?: boolean
  accessToken?: string
}

const userList: UserT[] = []
const state = new Signal(userList)

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
}
