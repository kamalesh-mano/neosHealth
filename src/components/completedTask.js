//import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import 'react-toastify/dist/ReactToastify.css';
function CompletedTask() {
  const completedtasksArr = useSelector((state) => state.CompletedTask.completedTask);
  
    return (
      <div className="taskColumn">
        <p className="taskColumnHeader">Completed Task</p>
        <ul>
          {completedtasksArr.map((task) => {
          return <li key={task.id}>{task.name}</li>
          
        })}
        </ul>
        
      </div>
    );
  }
  
  export default CompletedTask;