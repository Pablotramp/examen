import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
// import { CounterApp } from './counter/CounterApp'
// import { TasksApp } from './task/TasksApp'
import GithubApp  from './GithubApp/GithubApp'
// import ToDoApp from './ToDo/ToDoApp'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   {/* <CounterApp /> */}
    {/* <TasksApp /> */}
    <GithubApp />
    {/* <ToDoApp /> */}
  </React.StrictMode>,
)
