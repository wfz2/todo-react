import React, { useState, useCallback } from 'react'
import { addTodo, removeTodo } from '../redux/actions/todo'
import { useSelector, useDispatch } from 'react-redux'

const TodoApp = () => {
  const [text, setText] = useState("")
  const todos = useSelector((store) => store.todos)

  const onChangeTextInput = useCallback((e) => {
    const newText = e.currentTarget.value
    setText(newText)
  }, [text])

  const dispatch = useDispatch()
  const onClickAdd = () => {
    dispatch(addTodo(text))
    setText("")
  }
  const onClickDel = (id) => {
    dispatch(removeTodo(id))
  }

  return (
    <div>
      <div>
        <input type="text" value={text} onChange={onChangeTextInput} />
        <button onClick={onClickAdd}>增加</button>
      </div>
      <ul>
        {
          todos.map(todo => {
            const { id, text } = todo
            return (
              <div>
                <li key={id}>
                  {text}
                </li>
                <button onClick={onClickDel}>删除</button>
              </div>
            )
          })
        }
      </ul>
    </div>
  )
}

export default TodoApp