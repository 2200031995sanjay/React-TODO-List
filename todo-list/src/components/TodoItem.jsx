const TodoItem = ({todo, toggleComplete, deleteTodo}) =>{
    return(
        <div className="flex justify-between items-center p-3 border-b">
            <span
            onClick={()=>toggleComplete(todo.id)}
            className= {`cursor-pointer  ${todo.completed ? "line-throough text-gray-500" : ""}`}
            >
                {todo.text}
           </span>
           <button onClick={()=>deleteTodo(todo.id) }className="text-red-500">
            ❌
           </button>

        </div>
    );
};

export default TodoItem;