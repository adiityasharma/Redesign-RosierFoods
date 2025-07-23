import React, { useState } from "react";
import {Link} from "react-router-dom"

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");


  const handleSubmit = (event) => {
    event.preventDefault();

    if (username === "user" && password === "password") {
      alert("Login successful!");
      setError("");
    } else {
      setError("Invalid username or password.");
    }
  };

  return (
    <div className="min-h-screen p-4 flex items-center justify-center bg-gray-900 text-gray-100">
      <form
        onSubmit={handleSubmit}
        className="bg-gray-800 p-10 rounded-lg shadow-xl w-full max-w-md"
      >
        <h2 className="text-3xl font-bold text-center mb-8 text-white">
          Login
        </h2>

        {error && (
          <p className="bg-red-700 text-white text-sm p-3 rounded mb-4">
            {error}
          </p>
        )}

        <div className="mb-6">
          <label
            htmlFor="username"
            className="block text-gray-400 text-sm font-bold mb-2"
          >
            Username:
          </label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="shadow appearance-none border border-gray-600 rounded w-full py-3 px-4 text-gray-100 leading-tight focus:outline-none focus:shadow-outline bg-gray-700 placeholder-gray-500"
            placeholder="Enter your username"
            required
          />
        </div>

        <div className="">
          <label
            htmlFor="password"
            className="block text-gray-400 text-sm font-bold mb-2"
          >
            Password:
          </label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="shadow appearance-none border border-gray-600 rounded w-full py-3 px-4 text-gray-100 mb-3 leading-tight focus:outline-none focus:shadow-outline bg-gray-700 placeholder-gray-500"
            placeholder="Enter your password"
            required
          />
        </div>

        <div className="mb-3 flex justify-between">
          <Link to={"/signin"} className="text-sm text-blue-500 cursor-pointer">
            Create New Account
          </Link>
          <Link
            to={"/forgotpassword"}
            className="text-end text-sm text-blue-500 cursor-pointer"
          >
            Forgot Password
          </Link>
        </div>

        <button
          type="submit"
          className="bg-blue-700 hover:bg-blue-800 text-white font-bold py-3 px-6 rounded focus:outline-none focus:shadow-outline w-full transition duration-300 ease-in-out"
        >
          Login
        </button>
      </form>
    </div>
  );
}

export default Login;
