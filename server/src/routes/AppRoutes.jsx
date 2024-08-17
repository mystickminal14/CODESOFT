import React from "react";
import { Route, Routes } from "react-router-dom";
import SignIn from "../pages/auth/SignIn";
import SignUp from "../pages/auth/SignUp";


import TaskManagement from "../pages/TaskManagement/Board/TaskManagement";
import Tasks from "../pages/TaskManagement/Tasks/Tasks";
import BoardTask from './../pages/TaskManagement/Tasks/BoardTask';

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<SignIn />} />
      <Route path="/sign-up" element={<SignUp />} />
      <Route path="/app">
   
        <Route path="task-management">
          <Route path="board/:id" element={<BoardTask />} />
          <Route path="board" element={<TaskManagement />}  />
          </Route>
      </Route>
    </Routes>
  );
}
