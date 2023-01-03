import React, { useState, useEffect, Suspense } from "react";
import { createEffect, createSignal, Show } from "solid-js";
import "./styles/home_content.css";
import { Bar } from "recharts";
import { Link } from "react-router-dom";
import {
  BarChart,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
  Tooltip,
  XAxis,
} from "recharts";

// import {jwt, username} from "navKey/SideMenu";
import { jwt, username } from "navKey/UserService";

import CounterTasksToDo from "./counterTasks/counter_tasks_ToDo";
import CounterTasksBacklog from "./counterTasks/counter_tasks_Backlog";
import CounterTasksInProgress from "./counterTasks/counter_tasks_Inprogress";
import CounterTasksDone from "./counterTasks/counter_tasks_Done";
import CounterTasksApproved from "./counterTasks/counter_tasks_Approved";

export default function HomeContent() {
  const data = [
    { name: "María", age: 10, weight: 60 },
    { name: "Pedro", age: 20, weight: 50 },
    { name: "Matías", age: 30, weight: 85 },
    { name: "Julie", age: 40, weight: 10 },
    { name: "Marta", age: 25, weight: 30 },
    { name: "Joaquín", age: 35, weight: 20 },
    { name: "Carolina", age: 18, weight: 70 },
  ];

  
  return (
    <div className="home">
      Home
      <div className="counter1">
        <CounterTasksBacklog />
        <CounterTasksToDo />
        <CounterTasksInProgress />
        <CounterTasksDone />
        <CounterTasksApproved />
      </div>
      <div className="grafica">
        <ResponsiveContainer width="100%" aspect={2}>
          <BarChart
            data={data}
            width={500}
            height={300}
            margin={{ top: 5, right: 30, left: 30, bottom: 5 }}
          >
            <CartesianGrid strokeDasharray="4 1 2" />

            <XAxis dataKey="name" />
            <XAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="weight" fill="#6b48ff" />
            <Bar dataKey="age" fill="#1ee3cf" />
          </BarChart>
        </ResponsiveContainer>
        
      </div>
    </div>
  );
}
