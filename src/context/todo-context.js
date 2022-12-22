import React, { createContext, useState } from 'react'

export const TodoContext = createContext()

export function TodoProvider({ children }) {
  const [todos, setTodos] = useState([
    { id: 1, title: 'Learn React useState', isComplete: true },
    { id: 2, title: 'Learn React useEffect', isComplete: true },
    { id: 3, title: 'Learn React useContext', isComplete: false },
  ])

  function toggleTodo(id) {
    setTodos((prev) => {
      return prev.map((todo) => {
        return {
          ...todo,
          isComplete: todo.id === id ? !todo.isComplete : todo.isComplete,
        }
      })
    })
  }

  const contextValue = { todos, toggleTodo }

  return (
    <TodoContext.Provider value={contextValue}>{children}</TodoContext.Provider>
  )
}
