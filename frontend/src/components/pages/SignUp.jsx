import React, { useState } from "react";
import axios from "axios";
import { baseUrl } from "../../baseUrl";
import { Link, useNavigate } from "react-router-dom";

function SignUp() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post(`${baseUrl}/signup`, { name, email, password })
      .then((res) => {
        const { data } = res;
        console.log(data);
        if (res.status === 200) {
          navigate("/home");
          
        }
      })
      .catch((err) => {
        console.error(err);
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
              name="name"
              required
              className="w-full py-2 text-white text-lg border-b border-white bg-transparent focus:outline-none focus:border-gray-400"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
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
          <center>
            <br />
            <Link to="/login" className="text-blue-200">
              Login
            </Link>
          </center>
        </form>
      </div>
    </>
  );
}

export default SignUp;
