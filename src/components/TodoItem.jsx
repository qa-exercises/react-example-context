import React, { useContext } from 'react'
import { TodoContext } from '../context/todo-context'

export default function TodoItem({ todo }) {
  const { toggleTodo } = useContext(TodoContext)

  return (
    <li
      onClick={() => toggleTodo(todo.id)}
      className={todo.isComplete ? 'complete' : ''}
    >
      {todo.title}
    </li>
  )
}
