//import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from "react-redux";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { addTask, moveToCurrent, moveToCompleted } from "../redux/action/taskAction"
function CurrentTask({count,setCount}) {
    const currenttasks = useSelector((state) => state.CurrentTask.currentTask);
    const newtasks = useSelector((state) => state.AllTask.task);
    const completedtasks = useSelector((state) => state.CompletedTask.completedTask);
    console.log("completed task inside current:",completedtasks)
    const moveToNewTaskHandler = async(idToBemoved) => {
      console.log("id to be moved:",idToBemoved)
      const filteredResult = await currenttasks.find((e) => e.id=== idToBemoved);
      const moveTask = currenttasks.filter((item) => item.id !== idToBemoved);
      newtasks.push(filteredResult)
      dispatch(addTask(newtasks))
      dispatch(moveToCurrent(moveTask))
    }
    const moveToCompletedTaskHandler = async(idToBemoved) => {
      console.log("id to be moved:",idToBemoved)
      const filteredResult = await currenttasks.find((e) => e.id=== idToBemoved);
      const moveTask = currenttasks.filter((item) => item.id !== idToBemoved);
      
      console.log("completed task:",completedtasks)
      if(new Date().getTime() > filteredResult.timer){
        filteredResult.status = "failed"
        toast.error('!Oops You ran outta time', {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          });
      }
      else{
        filteredResult.status = "success"
        toast.success('you made it in time', {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          });
      }
      completedtasks.push(filteredResult)
      dispatch(moveToCompleted(completedtasks))
      dispatch(moveToCurrent(moveTask))
    }
    const dispatch = useDispatch()
    return (
      <div className="taskColumn">
        <p className="taskColumnHeader">Current Task</p>
        <ul>
          {currenttasks.map((task) => {
          return <li key={task.id}><span ><button className='toNewTask' onClick={() => moveToNewTaskHandler(task.id)}>&#171;</button></span>{task.name}
          <span ><button className='toCompletedTask' onClick={() => moveToCompletedTaskHandler(task.id)}> 	
&#187;</button></span></li>
          
        })}
        </ul>
        <ToastContainer />
      </div>
    );
  }
  
  export default CurrentTask;