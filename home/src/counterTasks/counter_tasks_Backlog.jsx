import React, { useState, useEffect, Suspense } from "react";
import "./styles/counter_tasks_backlog.css";
// import { contToDo } from "service_1/CounterTasks";
import { getTasksBacklog } from "../modules/CounterTasks";
import iconBacklog from "../assets/clock_history_icon.png";
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

  return (
    <div className="backlog-counter">
      <h1 className="text-counter-backlog">
        {tasksBacklog.length} Tasks in Backlog
      </h1>
      <div className="container-icon-backlog">
        <img class="iconBacklog" src={iconBacklog} alt=""></img>
      </div>
    </div>
  );
}
