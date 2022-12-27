import React, { useState, useEffect, Suspense } from "react";

// import { contToDo } from "service_1/CounterTasks";
import {getTasksApproved} from '../modules/CounterTasks'

export default function CounterTasksApproved() {
  const [tasksApproved, setTasks] = useState([]);
  const fetchTasks = async () => {
    const { data } = await getTasksApproved();
    setTasks(data);
  };

  useEffect(() => {
    try {
      fetchTasks();
    } catch (error) {}
  }, []);

  
  return <div>
    <h1>contador Approved{tasksApproved.length}</h1> 
    </div>;
}
