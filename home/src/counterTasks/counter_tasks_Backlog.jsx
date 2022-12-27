import React, { useState, useEffect, Suspense } from "react";

// import { contToDo } from "service_1/CounterTasks";
import {getTasksBacklog} from '../modules/CounterTasks'

export default function CounterTasksBacklog() {
  const [tasksBacklog, setTasks] = useState([]);
  const fetchTasks = async () => {
    const { data } = await getTasksBacklog();
    setTasks(data);
  };

  useEffect(() => {
    try {
      fetchTasks();
    } catch (error) {}
  }, []);

  
  return <div>
    <h1>contador Backlog{tasksBacklog.length}</h1> 
    </div>;
}
