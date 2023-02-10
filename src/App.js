import "./App.css";
import React from "react";
import Home from "./components/Home";
import Detail from "./components/Detail";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import TopBarProgress from "react-topbar-progress-indicator";


function App() {
  TopBarProgress.config({
    barColors: {
      "0": "#fff",
      "1.0": "#fff"
    },
    shadowBlur: 5
  });

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}></Route>

        <Route path="Item" element={<Detail/>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
