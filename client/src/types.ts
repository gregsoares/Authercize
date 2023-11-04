export type UserCredentialsT = {
  email: string
  password: string
}

export interface UserI {
  UUID?: string
  email: string
  type?: string
  isLoggedIn?: boolean
  accessToken?: string
}

export type UserT = {
  UUID: string
  type: string
  isLoggedIn?: boolean
  accessToken: string
}

export type UsersTablePropsT = {
  users: UserI[]
}
