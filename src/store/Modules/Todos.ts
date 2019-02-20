import { IGlobalState, ITodo, ITodosState } from 'model'
import { storeBuilder } from './Store/Store'

import Api from '@api'
import { rescodes } from './rescodes'
import { GlobalStore, Todos, UserStore } from '@store'
import globalroutines from './../../globalroutines/index'
import { Mutation } from 'vuex-module-decorators'
import { serv_constants } from '@src/store/Modules/serv_constants'


const state: ITodosState = {
  visuOnlyUncompleted: false,
  networkDataReceived: false,
  todos: [],
  todos_changed: 1,
  reload_fromServer: 0,
  testpao: 'Test',
  insidePending: false
}

const b = storeBuilder.module<ITodosState>('TodosModule', state)
const stateGetter = b.state()

// Getters
namespace Getters {

  const visuOnlyUncompleted = b.read(state => state.visuOnlyUncompleted, 'visuOnlyUncompleted')

  export const getters = {
    get visuOnlyUncompleted() {
      return visuOnlyUncompleted
    }
  }
}

namespace Mutations {

  function setTestpao(state: ITodosState, testpao: String) {
    state.testpao = testpao
  }

  function setTodos_changed(state: ITodosState) {
    state.todos_changed++
    mutations.setTestpao('Cambiato : ' + String(state.todos_changed))
    // console.log('*******  state.todos_changed', state.todos_changed)
  }

  function findTodoById(state: ITodosState, id: string) {
    for (let i = 0; i < state.todos.length; i++) {
      if (state.todos[i]._id === id)
        return i
    }
    return -1
  }

  function createNewItem(state: ITodosState, { objtodo, atfirst }) {
    console.log('atfirst', atfirst)
    if (atfirst)
      state.todos.unshift(objtodo)
    else
      state.todos.push(objtodo)

    Todos.mutations.setTodos_changed()
  }


  function modifymyItem(state: ITodosState, myitem: ITodo) {
    // Find record
    const ind = findTodoById(state, myitem._id)
    if (ind >= 0)
      state.todos[ind] = rescodes.jsonCopy(myitem)

  }

  function deletemyitem(state: ITodosState, myitem: ITodo) {
    // Find record
    const ind = findTodoById(state, myitem._id)

    // Delete Item in to Array
    if (ind >= 0)
      state.todos.splice(ind, 1)

  }


  export const mutations = {
    setTestpao: b.commit(setTestpao),
    setTodos_changed: b.commit(setTodos_changed),
    modifymyItem: b.commit(modifymyItem),
    deletemyitem: b.commit(deletemyitem),
    createNewItem: b.commit(createNewItem)
  }

}

function consolelogpao(strlog, strlog2 = '', strlog3 = '') {
  globalroutines(null, 'log', strlog + strlog2 + strlog3, null)
}


namespace Actions {

  function json2array(json) {
    let result = []
    let keys = Object.keys(json)
    keys.forEach(function (key) {
      result.push(json[key])
    })
    return result
  }

  // If something in the call of Service Worker went wrong (Network or Server Down), then retry !
  async function sendSwMsgIfAvailable() {
    let something = false

    if ('serviceWorker' in navigator) {
      console.log(' -------- sendSwMsgIfAvailable')

      let count = await checkPendingMsg(null)
      if (count > 0) {
        return await navigator.serviceWorker.ready
          .then(function (sw) {

            return globalroutines(null, 'readall', 'swmsg')
              .then(function (arr_recmsg) {
                // let recclone = [...arr_recmsg]
                if (arr_recmsg.length > 0) {

                  // console.log('      TROVATI MSG PENDENTI ! ORA LI MANDO: ', arr_recmsg)

                  // console.log('----------------------  2)    navigator (2) .serviceWorker.ready')

                  let promiseChain = Promise.resolve()

                  for (let rec of arr_recmsg) {
                    // console.log('             .... sw.sync.register ( ', rec._id)
                    // if ('SyncManager' in window) {
                    //   sw.sync.register(rec._id)
                    // } else {

                    // #Alternative to SyncManager
                    promiseChain = promiseChain.then(() => {
                      return Api.syncAlternative(rec._id)
                        .then(() => {
                          something = true
                        })
                    })

                    // }
                  }
                  return promiseChain
                }
              })

          })
      }
    }

    return new Promise(function (resolve, reject) {
      resolve(something)
    })
  }

  async function waitAndcheckPendingMsg(context) {

    await aspettansec(1000)

    return await checkPendingMsg(context)
      .then(ris => {
        if (ris) {
          console.log('risPending = ', ris)
          return sendSwMsgIfAvailable()
            .then(something => {
              if (something) {
                console.log('something')
                // Refresh data
                return waitAndRefreshData(context)
              }
            })
        }
      })

  }

  async function waitAndRefreshData(context) {
    await aspettansec(3000)

    return await dbLoadTodo(context, false)
  }

  async function checkPendingMsg(context) {
    // console.log('checkPendingMsg')

    const config = await globalroutines(null, 'readall', 'config', null)
    // console.log('config', config)

    try {
      if (config) {
        if (config[1].stateconn !== undefined) {
          // console.log('config.stateconn', config[1].stateconn)

          if (config[1].stateconn !== GlobalStore.state.stateConnection) {
            GlobalStore.mutations.setStateConnection(config[1].stateconn)
          }

        }
      }
    } catch (e) {
    }

    return new Promise(function (resolve, reject) {
      // Check if there is something
      return globalroutines(null, 'count', 'swmsg')
        .then(function (count) {
          if (count > 0) {
            console.log('count = ', count)
            return resolve(true)
          } else {
            return resolve(false)
          }
        })
        .catch(e => {
          return reject()
        })
    })


  }

  async function dbLoadTodo(context, checkPending: boolean = false) {
    console.log('dbLoadTodo', checkPending)

    if (UserStore.state.userId === '')
      return false // Login not made

    state.networkDataReceived = false

    let ris = await Api.SendReq('/todos/' + UserStore.state.userId, 'GET', null)
      .then(res => {
        state.networkDataReceived = true

        // console.log('******* UPDATE TODOS.STATE.TODOS !:', res.todos)
        if (res.data.todos) {
          state.todos = [...res.data.todos]
          Todos.mutations.setTodos_changed()
        }

        console.log('**********  res', 'state.todos', state.todos, 'checkPending', checkPending)
        // After Login will store into the indexedDb...

        return res
      })
      .catch(error => {
        console.log('error dbLoadTodo', error)
        UserStore.mutations.setErrorCatch(error)
        return error
      })

    // console.log('ris : ', ris)
    // console.log('ris STATUS: ', ris.status)

    if (!Todos.state.networkDataReceived) {

      if (ris.status === serv_constants.RIS_CODE__HTTP_FORBIDDEN_INVALID_TOKEN) {
        consolelogpao('UNAUTHORIZING... TOKEN EXPIRED... !! ')
      } else {
        consolelogpao('NETWORK UNREACHABLE ! (Error in fetch)', UserStore.getters.getServerCode, ris.status)
      }
      if ('serviceWorker' in navigator) {
        // Read all data from IndexedDB Store into Memory
        await updatefromIndexedDbToStateTodo(context)
      }
    } else {
      if (ris.status === rescodes.OK && checkPending) {
        waitAndcheckPendingMsg(context)
      }
    }
  }

  async function updatefromIndexedDbToStateTodo(context) {
    // console.log('Update the array in memory, from todos table from IndexedDb')
    await globalroutines(null, 'updatefromIndexedDbToStateTodo', 'todos', null)
      .then(() => {
        console.log('updatefromIndexedDbToStateTodo! ')
        return true
      })
  }

  function aspettansec(numsec) {
    return new Promise(function (resolve, reject) {
      setTimeout(function () {
        resolve('anything')
      }, numsec)
    })
  }

  async function testfunc() {
    while (true) {
      consolelogpao('testfunc')
      Todos.mutations.setTodos_changed()
      // console.log('Todos.state.todos_changed:', Todos.state.todos_changed)
      await aspettansec(5000)
    }
  }

  async function dbSaveTodo(context, itemtodo: ITodo) {
    return await dbInsertSaveTodo(context, itemtodo, 'PATCH')
  }

  async function dbInsertTodo(context, itemtodo: ITodo) {
    return await dbInsertSaveTodo(context, itemtodo, 'POST')
  }

  async function dbInsertSaveTodo(context, itemtodo: ITodo, method) {

    if (!('serviceWorker' in navigator)) {

      console.log('dbInsertSaveTodo', itemtodo, method)
      let call = '/todos'

      if (UserStore.state.userId === '')
        return false // Login not made

      if (method !== 'POST')
        call += '/' + itemtodo._id

      console.log('TODO TO SAVE: ', itemtodo)

      let res = await Api.SendReq(call, method, itemtodo)
        .then(res => {
          console.log('dbInsertSaveTodo to the Server', res.data)

          return (res.status === 200)
        })
        .catch((error) => {
          UserStore.mutations.setErrorCatch(error)
          // return UserStore.getters.getServerCode
          return false
        })
    }

    return true
  }

  async function dbDeleteTodo(context, item: ITodo) {

    if (!('serviceWorker' in navigator)) {
      // console.log('dbDeleteTodo', item)
      if (UserStore.state.userId === '')
        return false // Login not made

      let res = await Api.SendReq('/todos/' + item._id, 'DELETE', item)
        .then(res => {
          console.log('dbDeleteTodo to the Server')
        })
        .catch((error) => {
          UserStore.mutations.setErrorCatch(error)
          return UserStore.getters.getServerCode
        })

      return res
    }
  }

  async function getTodosByCategory(context, category: string) {
    let myarr = state.todos.filter((p) => {
      return p.category === category
    })

    return myarr
  }

  export const actions = {
    dbInsertTodo: b.dispatch(dbInsertTodo),
    dbSaveTodo: b.dispatch(dbSaveTodo),
    dbLoadTodo: b.dispatch(dbLoadTodo),
    dbDeleteTodo: b.dispatch(dbDeleteTodo),
    updatefromIndexedDbToStateTodo: b.dispatch(updatefromIndexedDbToStateTodo),
    getTodosByCategory: b.dispatch(getTodosByCategory),
    checkPendingMsg: b.dispatch(checkPendingMsg),
    waitAndcheckPendingMsg: b.dispatch(waitAndcheckPendingMsg)
  }

}


// Module
const TodosModule = {
  get state() {
    return stateGetter()
  },
  getters: Getters.getters,
  mutations: Mutations.mutations,
  actions: Actions.actions
}

export default TodosModule
