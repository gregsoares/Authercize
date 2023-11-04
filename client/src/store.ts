//create effector store to keep user state,user UUID, if loggedIn, type of user, access token;
import { createStore, createEvent } from 'effector'
import { UserI } from './types'

export const addUser = createEvent<UserI>()

export const $users = createStore<UserI[]>([])
$users.on(addUser, (state, payload) => [...state, payload])
