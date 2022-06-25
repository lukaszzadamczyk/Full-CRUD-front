import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { Home } from "./components/views/Home/Home";
import { AddUser } from "./components/views/AddUser/AddUser";

import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <BrowserRouter>
      <ToastContainer position="top-center" />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/addUser" element={<AddUser />} />
        <Route path="/edit/:id" element={<AddUser />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
