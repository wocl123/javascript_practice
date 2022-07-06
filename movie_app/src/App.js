import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";
import Home from "./routes/Home";
import About from "./routes/About";
import Navigation from "./components/Navigation";
import MovieItem from "./components/movie_rank/MovieItem";

function App() {
  return (
    <BrowserRouter>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/rank" element={<MovieItem />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
