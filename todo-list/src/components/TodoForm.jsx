import { useState } from 'react';

const TodoForm = ({ addTodo }) =>{
    const [task, setTask] = useState("");

    const handlesubmit=(e)=>{
        e.preventDefault();
        if(!task.trim()) return;
        addTodo(task);
        setTask("")

    };

    return(
        <form onSubmit={handlesubmit} className='p-4 flex gap-2'>
            <input 
            type="text" 
            value={task}
            onChange={(e)=> setTask(e.target.value)}
            placeholder='Add a task...'
            className="border p-2 rounded w-full"
            />
            <button type='sumit' className="bg-blue-500 text-white px-4 py-2 rounded"> 
                Add
            </button>
        </form>

    );
}

export default TodoForm;