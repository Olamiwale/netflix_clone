import React from "react";
import { Route, Routes } from "react-router-dom";
import Hero from "./components/Hero/Hero";
import LogIn from "./pages/LogIn";
import SignUp from "./pages/SignUp";
import Password from "./pages/Password";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/login" element={<LogIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/password" element={<Password />} />
      </Routes>
    </>
  );
}

export default App;
