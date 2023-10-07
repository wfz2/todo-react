import { ADD_TODO_TYPE } from '../actions/todo'
import { REMOVE_TODO_TYPE } from '../actions/todo'
const initialState = []

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO_TYPE: {
      return [
        ...state,
        action.payload,
      ]
    }
    case REMOVE_TODO_TYPE: {
      // return [
      //   ...state,
      //   action.payload,
      // ]
      return state => state.filter((item) => item.id !== action.payload)
    }

    default: {
      return state
    }
  }
}