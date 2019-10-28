import { IToken } from 'model/other'

export const DefaultUser: IUserFields = {
  email: '',
  username: '',
  name: '',
  surname: '',
  password: ''
}

export interface IUserFields {
  _id?: string
  email?: string
  username?: string
  name?: string
  surname?: string
  password?: string
  ipaddr?: string
  perm?: number
  img?: string
  verified_email?: boolean
  tokens?: IToken[]
  lasttimeonline?: Date
}

/*
password?: string
 lang
 */

export interface IPerm {
  _id: number
  label: string
}

export interface IUserState {
  my: IUserFields
  lang?: string
  repeatPassword?: string

  categorySel?: string

  tokenforgot?: string

  servercode?: number
  resStatus?: number
  x_auth_token?: string
  isLogged?: boolean
  isAdmin?: boolean
  isManager?: boolean
  isTeacher?: boolean
  usersList?: IUserFields[]
  permissionsList?: IPerm[]
  countusers?: number
}
