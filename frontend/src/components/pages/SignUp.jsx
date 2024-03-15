import React, { useState } from "react";
import axios from "axios";
import { baseUrl } from "../../baseUrl";


function SignUp() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    axios.post(`${baseUrl}/signup`, { username, email, password })
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.error(err); // Log errors
      });
  };

  return (
    <>
      <div className="fixed top-1/2 left-1/2 w-96 p-10 transform -translate-x-1/2 -translate-y-1/2 bg-gray-900 bg-opacity-100 shadow-lg rounded-lg">
        <center>
          <h1 className="text-blue-500 text-bold text-2xl">Sign UP</h1>
        </center>
        <form onSubmit={handleSubmit}>
          <div className="relative">
            <input
              type="text"
              name="username"
              required
              className="w-full py-2 text-white text-lg border-b border-white bg-transparent focus:outline-none focus:border-gray-400"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="relative">
            <input
              type="email"
              name="email"
              required
              className="w-full py-2 text-white text-lg border-b border-white bg-transparent focus:outline-none focus:border-gray-400"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="relative">
            <input
              type="password"
              name="password"
              required
              className="w-full py-2 text-white text-lg border-b border-white bg-transparent focus:outline-none focus:border-gray-400"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <br />
          <br />
          <center>
            <button
              type="submit"
              className="relative w-32 h-12 rounded-md border border-blue-500 text-lg font-semibold uppercase tracking-wide bg-transparent text-white overflow-hidden transition duration-200 ease-in-out"
            >
              SUBMIT
              <span className="absolute top-0 left-0 w-full h-full bg-white opacity-0"></span>
            </button>
          </center>
        </form>
      </div>
    </>
  );
}

export default SignUp;
