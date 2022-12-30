import React, { useState, useEffect, Suspense } from "react";
import { createEffect, createSignal, Show } from "solid-js";
import "./styles/home_content.css";

import { Link } from "react-router-dom";

// import {jwt, username} from "navKey/SideMenu";
import { jwt, username } from "navKey/UserService";

import CounterTasksToDo from "./counterTasks/counter_tasks_ToDo";
import CounterTasksBacklog from "./counterTasks/counter_tasks_Backlog";
import CounterTasksInProgress from "./counterTasks/counter_tasks_Inprogress";
import CounterTasksDone from "./counterTasks/counter_tasks_Done";
import CounterTasksApproved from "./counterTasks/counter_tasks_Approved";

export default function HomeContent() {



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
    </div>
  );
}
