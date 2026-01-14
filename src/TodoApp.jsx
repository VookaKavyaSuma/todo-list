import { useState } from 'react';
import todoLogo from './assets/todoList.jpg';
import './TodoApp.css';

export default function TodoApp() {
    
    let [todos , setTodos] = useState([]);
    let [newTask, setNewTask] = useState("");
    let [count, setCount] = useState(0);

    let addNewTask = () => {
        setTodos([...todos, newTask]);
        setCount(count + 1);
        setNewTask("");
    }

    let updateTodoValue = (event) => {
        setNewTask(event.target.value);
    }

    let deleteTodoValue = () => {
        setTodos(todos.slice(0 , -1));
        setCount(count - 1);
    }

    let deleteAllTodoValue = () => {
        setTodos([]);
        setCount(0);
    }

    return (
        <div>
            <div className='todo-list-header'>
                <img src={todoLogo} alt="Todo List Logo" className="todo-list-logo"/>
                <h2 className='todo-list-heading'>Your Todo Task List</h2>
            </div>
            <div className='todo-options'>
                <label htmlFor='todo-task' className='todo-options-label'><b>Task : </b></label>
                <input type="text" placeholder="Enter your todo task" value={newTask} onChange={updateTodoValue} id='todo-task'/>
                &nbsp;&nbsp;
                <button onClick={addNewTask}>Add</button>
                &nbsp;&nbsp;
                <button onClick={deleteTodoValue}>Delete</button>
                &nbsp;&nbsp;
                <button onClick={deleteAllTodoValue}>Delete All</button>
                &nbsp;&nbsp;
                <button onClick={setCount}>Total = {count}</button>
            </div>
            <ol className='todo-list-elements'> {
                todos.map((todo, index) => {
                    return (
                        <div className='todo-list-items'>
                            <li key={index}>{todo}</li>
                            <input type="checkbox" className='todo-list-items-checkbox'/>
                        </div>
                        )
                    }
                ) 
            }
            </ol>
        </div>
    );
}