import React, { useState, useEffect, Suspense } from "react";
import "./styles/counter_tasks_InProgress.css";
// import { contToDo } from "service_1/CounterTasks";
import {getTasksInProgress} from '../modules/CounterTasks'
import iconInProgress from "../assets/InProgresIcon.png";

export default function CounterTasksInProgress() {
  const [tasksInProgress, setTasks] = useState([]);
  const fetchTasks = async () => {
    const { data } = await getTasksInProgress();
    setTasks(data);
  };

  useEffect(() => {
    try {
      fetchTasks();
    } catch (error) {}
  }, []);

  
  return <div className="InProgress-counter">
    <h1 className="text-counter-InProgress">{tasksInProgress.length} Tasks InProgress</h1> 

    <div className="container-icon-InProgress">
        <img class="iconInProgress" src={iconInProgress} alt=""></img>
      </div>
    </div>;
}
