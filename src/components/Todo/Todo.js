import React, { useState } from 'react';

function Todo() {
  const [tasks, setTasks] = useState([]);

  const [taskInput, setTaskInput] = useState('');

  const addTask = () => {

    if (taskInput.trim() === '') {
      alert('Please enter a task!');
      return;
    }

    setTasks([...tasks, taskInput]);
    setTaskInput('');
  };

  const deleteTask = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks.splice(index, 1);
    setTasks(updatedTasks);
  };

  return (
    <div className="App">
      <h1>Todo List</h1>
      <div>
        <input
          type="text"
          value={taskInput}
          onChange={(e) => setTaskInput(e.target.value)}
          placeholder="Add a new task"
        />
        <button onClick={addTask}>Add Task</button>
      </div>
      <ul>
        {tasks.map((task, index) => (
          <li key={index}>
            {task}
            <button onClick={() => deleteTask(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Todo;



