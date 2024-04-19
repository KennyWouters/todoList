import React from 'react';

function TaskInput({ taskInput, setTaskInput, addTask, saveTask, taskBeingEdited }) {
  return (
    <>
      <input
        type="text"
        value={taskInput}
        onChange={(e) => setTaskInput(e.target.value)}
        placeholder="Write your task here"
      />
      {taskBeingEdited ? (
        <button onClick={saveTask}>Save</button>
      ) : (
        <button onClick={addTask}>Add</button>
      )}
    </>
  );
}

export default TaskInput;