import Api from '@api'
import { ISignupOptions, ISigninOptions, IUserState } from 'model'
import { ILinkReg, IResult, IIdToken, IToken } from 'model/other'
import { storeBuilder } from './Store/Store'
import router from '@router'

import { serv_constants } from '../Modules/serv_constants'
import { tools } from '../Modules/tools'
import { GlobalStore, UserStore, Todos } from '@store'
import globalroutines from './../../globalroutines/index'

import translate from './../../globalroutines/util'
import * as Types from '@src/store/Api/ApiTypes'

const bcrypt = require('bcryptjs')

// State
const state: IUserState = {
  userId: '',
  email: '',
  username: '',
  idapp: process.env.APP_ID,
  password: '',
  lang: '',
  repeatPassword: '',
  tokens: [],
  verified_email: false,
  categorySel: 'personal',
  servercode: 0,
  x_auth_token: '',
  isAdmin: false
}


const b = storeBuilder.module<IUserState>('UserModule', state)
const stateGetter = b.state()

namespace Getters {
  // const fullName = b.read(function fullName(state): string {
  //   return state.userInfos.firstname?capitalize(state.userInfos.firstname) + " " + capitalize(state.userInfos.lastname):null;
  // })

  const lang = b.read(state => {
    if (state.lang !== '') {
      return state.lang
    } else {
      return process.env.LANG_DEFAULT
    }
  }, 'lang')

  // const tok = b.read(state => {
  //   if (state.tokens) {
  //     if (typeof state.tokens[0] !== 'undefined') {
  //       return state.tokens[0].token
  //     } else {
  //       return ''
  //     }
  //   } else {
  //     return ''
  //   }
  // }, 'tok')

  const isServerError = b.read(state => {
    return (state.servercode === tools.ERR_SERVERFETCH)
  }, 'isServerError')

  const getServerCode = b.read(state => {
    return state.servercode
  }, 'getServerCode')

  export const getters = {
    get lang() {
      return lang()
    },
    // get tok() {
    //   return tok()
    // },
    get isServerError() {
      return isServerError()
    },
    get getServerCode() {
      return getServerCode()
    }
    // get fullName() { return fullName();},
  }


}


namespace Mutations {
  function authUser(state: IUserState, data: IUserState ) {
    state.userId = data.userId
    state.username = data.username
    if (data.verified_email)
      state.verified_email = data.verified_email

    if (data.categorySel)
      state.categorySel = data.categorySel  // ??


    resetArrToken(state.tokens)
    state.tokens.push({ access: 'auth', token: state.x_auth_token, data_login: new Date() })

    // ++Todo: Settings Users Admin
    if (state.username === 'paoloar77')
      state.isAdmin = true

    // console.log('state.tokens', state.tokens)
  }

  function setpassword(state: IUserState, newstr: string) {
    state.password = newstr
  }

  function setemail(state: IUserState, newstr: string) {
    state.email = newstr
  }

  function setlang(state: IUserState, newstr: string) {
    console.log('SETLANG', newstr)
    state.lang = newstr
    localStorage.setItem(tools.localStorage.lang, state.lang)
  }

  function UpdatePwd(state: IUserState, x_auth_token: string) {
    state.x_auth_token = x_auth_token
    if (!state.tokens) {
      state.tokens = []
    }
    state.tokens.push({ access: 'auth', token: x_auth_token, data_login: new Date() })
  }

  function setServerCode(state: IUserState, num: number) {
    state.servercode = num
  }

  function setResStatus(state: IUserState, status: number) {
    state.resStatus = status
  }

  function setAuth(state: IUserState, x_auth_token: string) {

    state.x_auth_token = x_auth_token
  }


  function resetArrToken(arrtokens) {
    if (!arrtokens.tokens) {
      arrtokens.tokens = []
    }

    // Take only the others access (from others Browser)
    return arrtokens.filter((token: IToken) => {
      return token.access !== 'auth'
    })
  }

  function clearAuthData(state: IUserState) {
    state.userId = ''
    state.username = ''
    resetArrToken(state.tokens)
    state.x_auth_token = ''
    state.verified_email = false
    state.categorySel = 'personal'
  }


  function setErrorCatch(state: IUserState, axerr: Types.AxiosError) {
    if (state.servercode !== tools.ERR_SERVERFETCH) {
      state.servercode = axerr.getCode()
    }
    console.log('Err catch: (servercode:', axerr.getCode(), axerr.getMsgError(), ')')
  }

  function getMsgError(state: IUserState, err: number) {
    let msgerrore = ''
    if (err !== tools.OK) {
      msgerrore = 'Error [' + state.servercode + ']: '
      if (state.servercode === tools.ERR_SERVERFETCH) {
        msgerrore = translate('fetch.errore_server')
      } else {
        msgerrore = translate('fetch.errore_generico')
      }

      if (process.env.DEV) {
        console.log('ERROREEEEEEEEE: ', msgerrore, ' (', err, ')')
      }
    }

    // return { code: state.servercode, msg: msgerrore }
    return msgerrore
  }


  export const mutations = {
    authUser: b.commit(authUser),
    setpassword: b.commit(setpassword),
    setemail: b.commit(setemail),
    setlang: b.commit(setlang),
    UpdatePwd: b.commit(UpdatePwd),
    setServerCode: b.commit(setServerCode),
    setResStatus: b.commit(setResStatus),
    setAuth: b.commit(setAuth),
    clearAuthData: b.commit(clearAuthData),
    setErrorCatch: b.commit(setErrorCatch),
    getMsgError: b.commit(getMsgError)
  }


}

namespace Actions {

  async function sendUserEdit(context, form: Object) {
    try {
      const { data } = await Api.postFormData('profile/edit', form)
      console.log(data)
      // return new ApiSuccess({data})

    } catch {
      // return new ApiError()
    }
  }

  async function resetpwd(context, paramquery: IUserState) {

    let usertosend = {
      keyappid: process.env.PAO_APP_ID,
      idapp: process.env.APP_ID,
      email: paramquery.email,
      password: paramquery.password,
      tokenforgot: paramquery.tokenforgot
    }
    console.log(usertosend)

    Mutations.mutations.setServerCode(tools.CALLING)

    return await Api.SendReq('/updatepwd', 'POST', usertosend, true)
      .then(res => {
        return { code: res.data.code, msg: res.data.msg }
      })
      .catch((error: Types.AxiosError) => {
        UserStore.mutations.setErrorCatch(error)
        return { code: UserStore.getters.getServerCode, msg: error.getMsgError() }
      })

  }

  async function requestpwd(context, paramquery: IUserState) {

    let usertosend = {
      keyappid: process.env.PAO_APP_ID,
      idapp: process.env.APP_ID,
      email: paramquery.email
    }
    console.log(usertosend)

    Mutations.mutations.setServerCode(tools.CALLING)

    return await Api.SendReq('/requestnewpwd', 'POST', usertosend)
      .then(res => {
        return { code: res.data.code, msg: res.data.msg }
      }).catch((error) => {
        UserStore.mutations.setErrorCatch(error)
        return UserStore.getters.getServerCode
      })

  }

  async function vreg(context, paramquery: ILinkReg) {
    let usertosend = {
      keyappid: process.env.PAO_APP_ID,
      idapp: process.env.APP_ID,
      idlink: paramquery.idlink
    }
    console.log(usertosend)

    Mutations.mutations.setServerCode(tools.CALLING)

    return await Api.SendReq('/vreg', 'POST', usertosend)
      .then(res => {
        // console.log("RITORNO 2 ");
        // mutations.setServerCode(myres);
        if (res.data.code === serv_constants.RIS_CODE_EMAIL_VERIFIED) {
          console.log('VERIFICATO !!')
          localStorage.setItem(tools.localStorage.verified_email, String(true))
        } else {
          console.log('Risultato di vreg: ', res.data.code)
        }
        return { code: res.data.code, msg: res.data.msg }
      }).catch((error) => {
        UserStore.mutations.setErrorCatch(error)
        return UserStore.getters.getServerCode
      })
  }

  async function signup(context, authData: ISignupOptions) {
    console.log('SIGNUP')

    // console.log("PASSW: " + authData.password);

    let mylang = state.lang
    console.log('MYLANG: ' + mylang)

    return bcrypt.hash(authData.password, bcrypt.genSaltSync(12))
      .then((hashedPassword: string) => {
        let usertosend = {
          keyappid: process.env.PAO_APP_ID,
          lang: mylang,
          email: authData.email,
          password: String(hashedPassword),
          username: authData.username,
          idapp: process.env.APP_ID
        }

        console.log(usertosend)

        Mutations.mutations.setServerCode(tools.CALLING)

        return Api.SendReq('/users', 'POST', usertosend)
          .then(res => {

            const newuser = res.data

            console.log('newuser', newuser)

            Mutations.mutations.setServerCode(res.status)

            if (res.status === 200) {
              let userId = newuser._id
              let username = authData.username
              if (process.env.DEV) {
                console.log('USERNAME = ' + username)
                console.log('IDUSER= ' + userId)
              }

              Mutations.mutations.authUser({
                userId,
                username,
                verified_email: false
              })

              const now = new Date()
              // const expirationDate = new Date(now.getTime() + myres.data.expiresIn * 1000);
              const expirationDate = new Date(now.getTime() * 1000)
              localStorage.setItem(tools.localStorage.lang, state.lang)
              localStorage.setItem(tools.localStorage.userId, userId)
              localStorage.setItem(tools.localStorage.username, username)
              localStorage.setItem(tools.localStorage.token, state.x_auth_token)
              localStorage.setItem(tools.localStorage.expirationDate, expirationDate.toString())
              localStorage.setItem(tools.localStorage.verified_email, String(false))
              state.isLogged = true
              // dispatch('storeUser', authData);
              // dispatch('setLogoutTimer', myres.data.expiresIn);

              return tools.OK
            } else {
              return tools.ERR_GENERICO
            }
          })
          .catch((error) => {
            UserStore.mutations.setErrorCatch(error)
            return UserStore.getters.getServerCode
          })
      })
  }

  async function signin(context, authData: ISigninOptions) {
    console.log('LOGIN signin')

    // console.log('MYLANG = ' + state.lang)

    let sub = null

    try {
      if ('serviceWorker' in navigator) {
        sub = await navigator.serviceWorker.ready
          .then(function (swreg) {
            console.log('swreg')
            let sub = swreg.pushManager.getSubscription()
            return sub
          })
          .catch(e => {
            sub = null
          })
      }
    } catch (e) {
      console.log('Err navigator.serviceWorker.ready ... GetSubscription:', e)
    }

    const options = {
      title: translate('notification.title_subscribed'),
      content: translate('notification.subscribed'),
      openUrl: '/'
    }

    const usertosend = {
      username: authData.username,
      password: authData.password,
      idapp: process.env.APP_ID,
      keyappid: process.env.PAO_APP_ID,
      lang: state.lang,
      subs: sub,
      options
    }

    // console.log('PASSO 4')

    console.log(usertosend)

    Mutations.mutations.setServerCode(tools.CALLING)

    let myres: any

    console.log('Api.SendReq')

    return Api.SendReq('/users/login', 'POST', usertosend, true)
      .then(res => {
        myres = res

        if (myres.status !== 200) {
          return Promise.reject(tools.ERR_GENERICO)
        }
        return myres

      }).then(res => {

        if (res.success) {
          GlobalStore.mutations.SetwasAlreadySubOnDb(res.data.subsExistonDb)

          let myuser: IUserState = res.data.usertosend
          if (myuser) {
            let userId = myuser.userId
            let username = authData.username
            let verified_email = myuser.verified_email

            Mutations.mutations.authUser({
              userId,
              username,
              verified_email
            })

            const now = new Date()
            // const expirationDate = new Date(now.getTime() + myres.data.expiresIn * 1000);
            const expirationDate = new Date(now.getTime() * 1000)
            localStorage.setItem(tools.localStorage.lang, state.lang)
            localStorage.setItem(tools.localStorage.userId, userId)
            localStorage.setItem(tools.localStorage.username, username)
            localStorage.setItem(tools.localStorage.token, state.x_auth_token)
            localStorage.setItem(tools.localStorage.expirationDate, expirationDate.toString())
            localStorage.setItem(tools.localStorage.isLogged, String(true))
            localStorage.setItem(tools.localStorage.verified_email, String(verified_email))
            localStorage.setItem(tools.localStorage.wasAlreadySubOnDb, String(GlobalStore.state.wasAlreadySubOnDb))

          }
        }

        return tools.OK

      }).then(code => {
        if (code === tools.OK) {
          return setGlobal(true)
            .then(() => {
              return code
            })
        } else {
          return code
        }
      })
      .catch((error) => {
        UserStore.mutations.setErrorCatch(error)
        return UserStore.getters.getServerCode
      })
  }

  async function logout(context) {
    console.log('logout')

    localStorage.removeItem(tools.localStorage.expirationDate)
    localStorage.removeItem(tools.localStorage.token)
    localStorage.removeItem(tools.localStorage.userId)
    localStorage.removeItem(tools.localStorage.username)
    localStorage.removeItem(tools.localStorage.isLogged)
    // localStorage.removeItem(rescodes.localStorage.leftDrawerOpen)
    localStorage.removeItem(tools.localStorage.verified_email)
    localStorage.removeItem(tools.localStorage.categorySel)
    localStorage.removeItem(tools.localStorage.wasAlreadySubOnDb)

    state.isLogged = false

    await GlobalStore.actions.clearDataAfterLogout()

    let usertosend = {
      keyappid: process.env.PAO_APP_ID,
      idapp: process.env.APP_ID
    }

    console.log(usertosend)
    const riscall = await Api.SendReq('/users/me/token', 'DELETE', usertosend)
      .then(res => {
        console.log(res)
      }).then(() => {
        Mutations.mutations.clearAuthData()
      }).catch((error) => {
        UserStore.mutations.setErrorCatch(error)
        return UserStore.getters.getServerCode
      })

    return riscall

    // this.$router.push('/signin')
  }

  async function setGlobal(loggedWithNetwork: boolean) {
    state.isLogged = true
    GlobalStore.mutations.setleftDrawerOpen(localStorage.getItem(tools.localStorage.leftDrawerOpen) === 'true')
    GlobalStore.mutations.setCategorySel(localStorage.getItem(tools.localStorage.categorySel))

    GlobalStore.actions.checkUpdates()

    await GlobalStore.actions.loadAfterLogin()
      .then(() => {
        Todos.actions.dbLoadTodo({ checkPending: true })
      })
  }


  async function autologin_FromLocalStorage(context) {
    try {
      // console.log('*** autologin_FromLocalStorage ***')
      // INIT

      UserStore.state.lang = tools.getItemLS(tools.localStorage.lang)

      const token = localStorage.getItem(tools.localStorage.token)
      if (!token) {
        return false
      }
      const expirationDateStr = localStorage.getItem(tools.localStorage.expirationDate)
      let expirationDate = new Date(String(expirationDateStr))
      const now = new Date()
      if (now >= expirationDate) {
        console.log('!!! Login Expired')
        return false
      }
      const userId = String(localStorage.getItem(tools.localStorage.userId))
      const username = String(localStorage.getItem(tools.localStorage.username))
      const verified_email = localStorage.getItem(tools.localStorage.verified_email) === 'true'

      GlobalStore.state.wasAlreadySubOnDb = localStorage.getItem(tools.localStorage.wasAlreadySubOnDb) === 'true'

      console.log('*************  autologin userId', userId)

      UserStore.mutations.setAuth(token)

      Mutations.mutations.authUser({
        userId,
        username,
        verified_email
      })

      await setGlobal(false)

      console.log('autologin userId STATE ', state.userId)

      return true
    } catch (e) {
      console.error('ERR autologin ', e.message)
      return false
    }
  }


  export const actions = {
    resetpwd: b.dispatch(resetpwd),
    requestpwd: b.dispatch(requestpwd),
    vreg: b.dispatch(vreg),
    signup: b.dispatch(signup),
    signin: b.dispatch(signin),
    logout: b.dispatch(logout),
    autologin_FromLocalStorage: b.dispatch(autologin_FromLocalStorage)

  }
}

// Module
const UserModule = {
  get state() {
    return stateGetter()
  },
  getters: Getters.getters,
  mutations: Mutations.mutations,
  actions: Actions.actions
}

export default UserModule
