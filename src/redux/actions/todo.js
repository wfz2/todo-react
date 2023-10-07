// action creator 创建一个 action

export const ADD_TODO_TYPE = 'add_todo'
export const REMOVE_TODO_TYPE = 'remove_todo'

const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms))

export const addTodo = (text) => {
  return dispatch => {
    sleep(1000)
      .then(() => {
        dispatch({
          type: ADD_TODO_TYPE,
          payload: {
            id: new Date().getTime(),
            text
          }
        })
      })
  }
}
export const removeTodo = (id) => {
  return dispatch => {
    sleep(1000)
      .then(() => {
        dispatch({
          type: REMOVE_TODO_TYPE,
          payload: {
            id: id,
          }
        })
      })
  }
}