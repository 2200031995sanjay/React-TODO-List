import { useEffect, useState } from "react"
import TodoForm from "./components/TodoForm"
import TodoList from "./components/TodoList"
function App() {
  const [todos, setTodos] = useState(()=>{
    const savedTodos = localStorage.getItem("todos");
    return savedTodos ? JSON.parse(savedTodos) : [];
  });

  const [darkMode, setDarkMode] = useState(()=>{
    return localStorage.getItem("theme") === "dark";
  });

  useEffect(()=>{
    localStorage.setItem("todos", JSON.stringify(todos));
  },[todos]);

  useEffect(() => {
    localStorage.setItem("theme", darkMode ? "dark" : "light");
    document.documentElement.classList.toggle("dark", darkMode);
  }, [darkMode]);

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
    <div className={`max-w-md mx-auto mt-10 p-4 shadow-lg rounded-lg bg-white dark:bg-gray-800 dark:text-white`}>
    <div className="flex justify-between">
    <h1 className="text-2xl font-bold text-black dark:text-white">📝 To-Do List</h1>
<button 
  onClick={() => setDarkMode(!darkMode)} 
  className="text-lg text-black dark:text-white"
>
  {darkMode ? "🌞 Light" : "🌙 Dark"}
</button>
    </div><TodoForm addTodo={addTodo}/>
      <TodoList todos={todos} toggleComplete={toggleComplete} deleteTodo={deleteTodo}/>

    </div>
  )
}

export default App
