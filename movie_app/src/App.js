import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";
import Home from "./routes/Home";
import About from "./routes/About";
import Tech from "./routes/Tech";
import Navigation from "./components/Navigation";
import Ranking from "./components/movie_rank/Ranking";

function App() {
  return (
    <BrowserRouter>
      <Navigation />
      <Ranking />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/tech" element={<Tech />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
