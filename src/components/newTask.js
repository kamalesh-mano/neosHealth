//import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { removeTask, moveToCurrent } from "../redux/action/taskAction"
import { useDispatch } from "react-redux";

function NewTask({count,setCount}) {
  
  const newtasks = useSelector((state) => state.AllTask.task);
  const currenttasks = useSelector((state) => state.CurrentTask.currentTask);
  console.log("get current task:",currenttasks)

  const removeTaskHandler = async(idToBeRemoved) =>{
    console.log("id to be removed:",idToBeRemoved)
    const updatedTask = newtasks.filter((item) => item.id !== idToBeRemoved);
    console.log("after filtering:",updatedTask)
    dispatch(removeTask(updatedTask))
  }

  const moveToCurrentHandler = async(idToBemoved) => {
    console.log("id to be moved:",idToBemoved)
    const filteredResult = await newtasks.find((e) => e.id=== idToBemoved);
    const moveTask = newtasks.filter((item) => item.id !== idToBemoved);
    currenttasks.push(filteredResult)
    console.log("current task",filteredResult)
    dispatch(removeTask(moveTask))
    dispatch(moveToCurrent(currenttasks))
  }
  const dispatch = useDispatch()
    return (
      <div className="taskColumn">
        <p className="taskColumnHeader">New Task</p>
        <ul>
          {newtasks.map((task) => {
          return <li key={task.id}>{task.name}<span className='spanClass'><button className='CheckButton' href="#" onClick={() => moveToCurrentHandler(task.id)}>&#x2705;</button><button className='removeButton' onClick={() => removeTaskHandler(task.id)}>&#x2718;</button></span></li>
          
        })}
        </ul>
      </div>
    );
  }
  
  export default NewTask;