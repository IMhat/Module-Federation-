import React, { useState, useEffect, Suspense } from "react";
import "./styles/counter_tasks_Done.css";
// import { contToDo } from "service_1/CounterTasks";
import { getTasksDone } from "../modules/CounterTasks";
import iconDone from "../assets/DoneIcon.png";

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

  return (
    <div className="Done-counter">
      <h1 className="text-counter-Done ">{tasksDone.length} Tasks in Done</h1>

      <div className="container-icon-Done">
        <img class="iconDone" src={iconDone} alt=""></img>
      </div>
    </div>
  );
}
