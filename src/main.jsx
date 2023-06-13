import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
// import { CounterApp } from './CounterApp'
// import { TasksApp } from './TasksApp'
// import GithubApp  from './GithubApp'
import ToDoApp from './ToDoApp'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   {/* <CounterApp /> */}
    {/* <TasksApp /> */}
    {/* <GithubApp /> */}
    <ToDoApp />
  </React.StrictMode>,
)
