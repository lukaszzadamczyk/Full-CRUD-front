import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { Home } from "./components/views/Home/Home";
import { AddUser } from "./components/views/AddUser/AddUser";
import { View } from "./components/views/View/View";
import { Header } from "./components/Header/Header";

import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <BrowserRouter>
      <div className="app_container">
        <Header />
        <ToastContainer position="top-center" className="toast" />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/addUser" element={<AddUser />} />
          <Route path="/edit/:id" element={<AddUser />} />
          <Route path="/view/:id" element={<View />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
