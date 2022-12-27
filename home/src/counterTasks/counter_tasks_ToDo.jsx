import React, { useState, useEffect, Suspense } from "react";

// import { contToDo } from "service_1/CounterTasks";
import {getTasksToDo} from '../modules/CounterTasks'

export default function CounterTasksToDo() {
  const [tasksToDo, setTasks] = useState([]);
  const fetchTasks = async () => {
    const { data } = await getTasksToDo();
    setTasks(data);
  };

  useEffect(() => {
    try {
      fetchTasks();
    } catch (error) {}
  }, []);

  
  return <div>
    <h1>contador ToDo{tasksToDo.length}</h1> 
    </div>;
}
