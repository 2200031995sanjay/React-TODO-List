import { useState } from "react"
import TodoForm from "./components/TodoForm"
import TodoList from "./components/TodoList"
function App() {
  const [todos, setTodos] = useState([]);
  const addTodo = (text)=>{
    setTodos([...todos,{id:Date.now(),text,completed:false}]);
  }

  const toggleComplete = (id)=>{
    setTodos(todos.map((todo)=>(todo.id === id ? {...todo, completed: !todo.completed} : todo)));
  }

  const deleteTodo = (id)=>{
    setTodos(todos.filter((todo) => todo.id !== id));
  }

  return (
    <div className="max-w-md mx-auto mt-10 p-4 shadow-lg rounded-lg bg-white">
      <h1 className="text-2xl font-bold text-center mb-4">📝 To-Do List</h1>
      <TodoForm addTodo={addTodo}/>
      <TodoList todos={todos} toggleComplete={toggleComplete} deleteTodo={deleteTodo}/>

    </div>
  )
}

export default App
