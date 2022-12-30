import React, { useState, useEffect, Suspense } from "react";
import "./styles/counter_tasks_Approved.css";
// import { contToDo } from "service_1/CounterTasks";
import { getTasksApproved } from "../modules/CounterTasks";
import iconApproved from "../assets/ApprovedIcon.png";

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

  return (
    <div className="Approved-counter">
      <h1 className="text-counter-Approved">{tasksApproved.length} Tasks in Approved</h1>

      <div className="container-icon-Approved">
        <img class="iconInApproved" src={iconApproved} alt=""></img>
      </div>
    </div>
  );
}
