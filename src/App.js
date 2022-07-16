
import './App.css';
//import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
//importing components
import NewTask from "./components/newTask"
import CurrentTask from "./components/currentTask"
import CompletedTask from "./components/completedTask"
import AddTask from "./components/addNewTask"

function App() {
  const darkModeToggle = () => {
    var element = document.body;
    element.classList.toggle("lightMode");
    document.querySelectorAll('.taskColumn').forEach(function(button) {
      button.classList.toggle("lightModeTask")
    });
    document.querySelectorAll('.taskNameInput').forEach(function(button) {
      button.classList.toggle("lightModetaskName")
    });
    document.querySelectorAll('.AddTaskButton').forEach(function(button) {
      button.classList.toggle("lightModeAddTask")
    });
    document.querySelectorAll('.taskColumnHeader').forEach(function(button) {
      button.classList.toggle("lightModetaskHeader")
    });
    document.querySelectorAll('.neon-button').forEach(function(button) {
      button.classList.toggle("dark-Button")
    });
  
  }
  const state = useSelector((state) => state);
  console.log("checking state:",state)
  return (
    <div className="todoApp">
      <button className="modeToggler neon-button" onClick={darkModeToggle}>Mode</button>
      <div>
        <div className="formContainer">
          <AddTask />
        </div>
        <header className="taskContainer">
         <NewTask />
         <CurrentTask />
         <CompletedTask />
        </header>
      </div>
    </div>
  );
}

export default App;
