//import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTask } from "../redux/action/taskAction"
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { toast } from 'react-toastify';

function AddTask() {
    const [startDate, setStartDate] = useState();
    const tasks = useSelector((state) => state.AllTask.task);
    const[ newTask,setnewTask ] = useState('')
    const taskInputHandler = (e) =>{
      setnewTask(prev => prev = e.target.value)
      
    }
    const addNewTask = async ()=>{
      console.log("add clicked")
      if(newTask.length > 0 && startDate > 0 ){
        tasks.push({name:newTask,id:Math.random()*1000,timer:startDate})
        dispatch(addTask(tasks))
        setnewTask("");
        setStartDate("");
      }
      else{
        toast.error('enter all fields', {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          });
      }
    }
    const getDate = (startDate) =>{
      if(startDate != null){
        setStartDate(prev => prev = startDate.getTime())
      }
      else{
        console.log("choose a date")
      }
      
    }

    const dispatch = useDispatch()
    return (
      <div className="addTaskForm">
        <input onChange={taskInputHandler} value={newTask} className="taskNameInput" placeholder="Enter Task Name" type="text" ></input>
        <DatePicker placeholderText={'Please select a date'}  className='datePickerTimer' showTimeSelect selected={startDate} onChange={getDate} />
        <button className='AddTaskButton' onClick={addNewTask}> Add Task</button>
        
        
      </div>
    );
  }
  
  export default AddTask;

