import "antd/dist/antd.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import BoardMain from "./routes/board/BoardMain";
// import BoardView from "./routes/board/BoardView";
import Home from "./routes/Home";
// import Detail from "./routes/Detail";
import MovieSearch from "./routes/MovieSearch";
import Navigation from "./components/Navigation";

function App() {
  return (
    <BrowserRouter>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/board" element={<BoardMain />} />
        <Route path="/board/view/:id" element={<BoardView />} />
        <Route path="/movie/detail/:id" element={<Detail />} /> */}
        <Route path="/search" element={<MovieSearch />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
