import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "./components/Login";
import Otp from "./components/Otp";
import Top from "./components/Top";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/otp" element={<Otp />} />
      <Route path="/top" element={<Top />} />
    </Routes>
  );
};

export default App;
