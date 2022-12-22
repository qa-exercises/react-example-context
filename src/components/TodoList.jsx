import React, { useContext } from 'react'
import { TodoContext } from '../context/todo-context'
import TodoItem from './TodoItem'

export default function TodoList() {
  const { todos } = useContext(TodoContext)

  return (
    <ul>
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </ul>
  )
}
