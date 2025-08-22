import React, { useState } from 'react'


function ToDoList() {
  const [tasks, setTasks] = useState([
    { text: "Attend Classes", completed: false },
    { text: "Finish Assignments", completed: false },
    { text: "Go to gym", completed: false }
  ])
  const [newTask, setNewTask] = useState("")

  function handleInputChange(event) {
    setNewTask(event.target.value)
  }

  function addTask() {
    if (newTask.trim() !== "") {
      setTasks(t => [...t, { text: newTask, completed: false }])
      setNewTask("")
    }
  }

  function deleteTask(index) {
    const updatedTasks = tasks.filter((_, i) => i !== index)
    setTasks(updatedTasks)
  }

  function toggleTask(index) {
    const updatedTasks = tasks.map((task, i) =>
      i === index ? { ...task, completed: !task.completed } : task
    )
    setTasks(updatedTasks)
  }

  return (
    <div className="to-do-list">
      <h1>To Do List</h1>
      
      <div>
        <input 
          className="input-box"
          type="text"
          placeholder="Enter a task"
          value={newTask}
          onChange={handleInputChange}
           
        />
        <button 
          className="add-button"
          onClick={addTask}
        >
          Add
        </button>
      </div>

      <ol>
  {tasks.map((task, index) => (
    <li 
      key={index} 
      className={task.completed ? "completed" : ""}
    >
      <span className="text">{task.text}</span>

      <button 
        className="delete-button"
        onClick={() => deleteTask(index)}
      >
        Delete
      </button>

      <button 
        className="check-button"
        onClick={() => toggleTask(index)}
      >
        ✓
      </button>
    </li>
  ))}
</ol>
    </div>
  )
}

export default ToDoList