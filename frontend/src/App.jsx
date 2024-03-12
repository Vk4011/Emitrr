import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import Playground from "./components/Playground";

function App() {
  return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/playground" element={<Playground />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

function Home() {
  return (
    <div>
      <center>
        <h1>Home</h1>
        <br />
        <Link to="/playground">
          <button>Play Game</button>
        </Link>
      </center>
    </div>
  );
}

export default App;
