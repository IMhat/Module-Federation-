import React, { useState, useEffect, Suspense } from "react";
import "./styles/counter_tasks_ToDo.css";
// import { contToDo } from "service_1/CounterTasks";
import { getTasksToDo } from "../modules/CounterTasks";
import iconToDo from "../assets/ToDoIcon.png";

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

  return (
    <div className="ToDo-counter">
      <h1 className="text-counter-ToDo">{tasksToDo.length} Tasks in ToDo</h1>

      <div className="container-icon-ToDo">
        <img class="iconToDo" src={iconToDo} alt=""></img>
      </div>
    </div>
  );
}
