import React, { useState } from 'react';
import Button from './Button';

function Todo() {
    const [task, setTask] = useState('');
    const [tasks, setTasks] = useState([]);

    const AddBtn = (event) => {
        event.preventDefault();
        if (task.trim() === '') {
            alert('Please enter a task...');
            return;
        }
        if(tasks.includes(task)){
            alert('Task already exists');
            return;
        }
        setTasks([...tasks, task]);
        setTask('');
    };

    const removeTask = (index) => {
        const newTasks = tasks.filter((_, i) => i !== index);
        setTasks(newTasks);
    };

    const editTask = (index) => {
        const newTasks = [...tasks];
        const task = prompt('Edit Task', tasks[index]);
        if (task === '') {
            alert('Please enter a task...');
            return editTask(index);
        }
        newTasks[index] = task;
        setTasks(newTasks);
    }

    return (
        <>
        <h2 class='welcome'>Welcome to To-Do List</h2>
        <div class='todo'>
            <h1 class='todo_head'>Todo</h1>
            <form class='todo_form' onSubmit={AddBtn}>
                <input type="text" id='input' placeholder="Add a todo"  value={task} onChange={(event) => setTask(event.target.value)} />
                <Button Name='Add'/>
            </form>
             
        </div>
        <ul className='todo_list' id='todo_list'>
                {tasks.map((task, index) => (
                    <li key={index}>
                        <div class='task'>{task}</div>
                        <div>
                            <button class='remove' onClick={() => removeTask(index)}>Remove</button>
                            <button class='edit' onClick={() => editTask(index)}>Edit</button>
                        </div>

                    </li>
                ))}
            </ul>
       </>
    );
}

export default Todo;