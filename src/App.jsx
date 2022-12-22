import React from 'react'
import TodoList from './components/TodoList'
import { TodoProvider } from './context/todo-context'
import './style.css'

export default function App() {
  return (
    <main>
      <h1>☑️ To-do List</h1>
      <TodoProvider>
        <TodoList />
      </TodoProvider>
    </main>
  )
}
