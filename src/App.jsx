import { useState, useEffect } from 'react'
import './App.css'
import TaskList from './TaskList.jsx'
import TaskInput from './TaskInput.jsx'

function App() {
  const [tasks, setTasks] = useState(JSON.parse(localStorage.getItem('tasks')) || [])
  const [taskInput, setTaskInput] = useState('')
  const [taskBeingEdited, setTaskBeingEdited] = useState(null)

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks))
  }, [tasks])

  const addTask = () => {
    if (taskInput.trim() !== '') {
      setTasks([...tasks, {text: taskInput, completed: false}])
      setTaskInput('') // clear the input field after adding the task
    }
  }

  const deleteTask = (taskToDelete) => {
    setTasks(tasks.filter(task => task.text !== taskToDelete.text))
  }

  const completeTask = (taskToComplete) => {
    setTasks(tasks.map(task => task.text === taskToComplete.text ? { ...task, completed: true } : task))
  }

  const editTask = (taskToEdit) => {
    setTaskBeingEdited(taskToEdit)
    setTaskInput(taskToEdit.text)
  }

  const saveTask = () => {
    setTasks(tasks.map(task => task.text === taskBeingEdited.text ? { text: taskInput, completed: taskBeingEdited.completed } : task))
    setTaskBeingEdited(null)
    setTaskInput('')
  }

  return (
    <>
      <h1>Hello! Welcome to this to do list </h1>
      <h2>What do you want to do:</h2>
      <TaskInput
        taskInput={taskInput}
        setTaskInput={setTaskInput}
        addTask={addTask}
        saveTask={saveTask}
        taskBeingEdited={taskBeingEdited}
      />
      <TaskList
        tasks={tasks}
        deleteTask={deleteTask}
        completeTask={completeTask}
        editTask={editTask}
      />
    </>
  )
}

export default App