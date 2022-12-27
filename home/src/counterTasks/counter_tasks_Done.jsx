import React, { useState, useEffect, Suspense } from "react";

// import { contToDo } from "service_1/CounterTasks";
import {getTasksDone} from '../modules/CounterTasks'

export default function CounterTasksDone() {
  const [tasksDone, setTasks] = useState([]);
  const fetchTasks = async () => {
    const { data } = await getTasksDone();
    setTasks(data);
  };

  useEffect(() => {
    try {
      fetchTasks();
    } catch (error) {}
  }, []);

  
  return <div>
    <h1>contador Done{tasksDone.length}</h1> 
    </div>;
}
