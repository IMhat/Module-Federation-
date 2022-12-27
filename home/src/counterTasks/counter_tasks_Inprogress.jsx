import React, { useState, useEffect, Suspense } from "react";

// import { contToDo } from "service_1/CounterTasks";
import {getTasksInProgress} from '../modules/CounterTasks'

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

  
  return <div>
    <h1>contador Inprogress{tasksInProgress.length}</h1> 
    </div>;
}
