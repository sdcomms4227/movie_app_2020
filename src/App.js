import React from "react";
import "./App.css";
import { HashRouter, Routes, Route } from "react-router-dom";
import About from "./routes/About";
import Home from "./routes/Home";
import Detail from "./routes/Detail";
import Navigation from "./components/Navigation";

function App() {
  return (
    <HashRouter>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" state={{fromNavigation: true}} element={<About />} />
        <Route path="/movie-detail" element={<Detail />} />
      </Routes>
    </HashRouter>
  );
}

export default App;