import React from 'react';

function TaskList({ tasks, deleteTask, completeTask, editTask }) {
  return (
    <ul>
      {tasks.map((task, index) => (
        <li key={index} style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>
          {task.text}
          <button onClick={() => deleteTask(task)}>Delete</button>
          <button onClick={() => completeTask(task)}>Complete</button>
          <button onClick={() => editTask(task)}>Edit</button>
        </li>
      ))}
    </ul>
  );
}

export default TaskList;