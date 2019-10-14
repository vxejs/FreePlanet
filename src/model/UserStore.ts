import { IToken } from 'model/other'

export const DefaultUser = <IUserState>{
  email: '',
  username: '',
  name: '',
  surname: '',
  password: '',
  lang: 'it'
}

export interface IUserState {
  userId?: string
  email?: string
  username?: string
  name?: string
  surname?: string
  password?: string
  lang?: string
  ipaddr?: string
  perm?: number
  repeatPassword?: string

  tokens?: IToken[]

  verified_email?: boolean
  categorySel?: string

  tokenforgot?: string

  servercode?: number
  resStatus?: number
  x_auth_token?: string
  isLogged?: boolean
  isAdmin?: boolean
  usersList?: IUserList[]
  countusers?: number
}

export interface IUserList {
  _id: string
  username: string
  name?: string
  surname?: string
}
