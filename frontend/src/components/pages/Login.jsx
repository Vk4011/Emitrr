import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { baseUrl } from "../../baseUrl";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();

    fetch(`${baseUrl}/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    })
      .then((response) => response.json())
      .then((data) => {
      
        console.log(data);
       
        if (data.status === "Success") {
          navigate("/home"); 
        }
      })
      .catch((error) => {
       
        console.error("Error:", error);
      });
  };

  return (
    <>
      <div className="fixed top-1/2 left-1/2 w-96 p-10 transform -translate-x-1/2 -translate-y-1/2 bg-gray-900 bg-opacity-100 shadow-lg rounded-lg">
        <center>
          <h1 className="text-blue-500 text-bold text-2xl">Login</h1>
        </center>
        <form onSubmit={handleSubmit}>
          <div className="relative">
            <input
              type="text"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full py-2 text-white text-lg border-b border-white bg-transparent focus:outline-none focus:border-gray-400"
              placeholder="Email"
            />
          </div>
          <div className="relative">
            <input
              type="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full py-2 text-white text-lg border-b border-white bg-transparent focus:outline-none focus:border-gray-400"
              placeholder="Password"
            />
          </div>
          <br />
          <br />
          <center>
            <button
              type="submit"
              className="relative w-32 h-12 rounded-md border border-blue-500 text-lg font-semibold uppercase tracking-wide bg-transparent text-white overflow-hidden transition duration-200 ease-in-out"
            >
              SEND
              <span className="absolute top-0 left-0 w-full h-full bg-white opacity-0"></span>
            </button>
          </center>
          <Link to="/signup" className="signup">Signup</Link>
        </form>
      </div>
    </>
  );
}

export default Login;
