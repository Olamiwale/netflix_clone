import React from "react";
import { Route, Routes } from "react-router-dom";
import Hero from "./components/Hero/Hero";
import LogIn from "./pages/LogIn";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/login" element={<LogIn />} />
      </Routes>
    </>
  );
}

export default App;
