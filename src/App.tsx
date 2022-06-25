import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { Home } from "../src/components/pages/Home/Home";
import { AddUser } from "../src/components/pages/AddUser/AddUser";

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
