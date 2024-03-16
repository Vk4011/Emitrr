import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import Playground from "./components/Playground";
import Login from "./components/pages/Login";
import SignUp from "./components/pages/SignUp";
import LandingPage from "./components/LandingPage";


function App() {
  return (
    <>
      <BrowserRouter>
        <div>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/home" element={<Home />} />
            <Route path="/playground" element={<Playground />} />
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}

function Home() {


  return (
    <div>
      <center>
        <h1 className="text-3xl text-blue-500 text-bold">Welcome, {localStorage.getItem('username')} !</h1>
        <br />
        <Link to="/playground">
          <button>Play Game</button>
        </Link>
      </center>
    </div>
  );
}
export default App;
