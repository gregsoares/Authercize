export type UserT = {
  email: string
  password: string
}

export type UsersTablePropsT = {
  users: UserT[]
}

export type ApiResponseT = UserT[]
export type ApiErrorT = {
  message: string
}
