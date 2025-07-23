import React, { useState } from "react";
import { Link } from "react-router-dom";

function RegisterUser() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState("");
  const [messageType, setMessageType] = useState(""); // 'success' or 'error'

  const handleSubmit = (event) => {
    event.preventDefault();
    setMessage(""); // Clear previous messages
    setMessageType("");

    if (password !== confirmPassword) {
      setMessage("Passwords do not match.");
      setMessageType("error");
      return;
    }

    // In a real application, you would send this data to your backend API
    // for user registration. For this example, we'll just simulate success.
    console.log("Registering user:", { username, email, password });
    setMessage("Registration successful! You can now log in.");
    setMessageType("success");

    // Optionally clear form fields after successful registration
    setUsername("");
    setEmail("");
    setPassword("");
    setConfirmPassword("");
  };

  const messageClasses =
    messageType === "error"
      ? "bg-red-700 text-white"
      : "bg-green-700 text-white";

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900 text-gray-100 p-4">
      <form
        onSubmit={handleSubmit}
        className="bg-gray-800 p-10 rounded-lg shadow-xl w-full max-w-md"
      >
        <h2 className="text-3xl font-bold text-center mb-8 text-white">
          Register
        </h2>

        {message && (
          <p className={`${messageClasses} text-sm p-3 rounded mb-4`}>
            {message}
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
            placeholder="Choose a username"
            required
          />
        </div>

        <div className="mb-6">
          <label
            htmlFor="email"
            className="block text-gray-400 text-sm font-bold mb-2"
          >
            Email:
          </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="shadow appearance-none border border-gray-600 rounded w-full py-3 px-4 text-gray-100 leading-tight focus:outline-none focus:shadow-outline bg-gray-700 placeholder-gray-500"
            placeholder="Enter your email"
            required
          />
        </div>

        <div className="mb-3">
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
            placeholder="Create a password"
            required
          />
        </div>

        <div className="">
          <label
            htmlFor="confirmPassword"
            className="block text-gray-400 text-sm font-bold mb-2"
          >
            Confirm Password:
          </label>
          <input
            type="password"
            id="confirmPassword"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            className="shadow appearance-none border border-gray-600 rounded w-full py-3 px-4 text-gray-100 mb-3 leading-tight focus:outline-none focus:shadow-outline bg-gray-700 placeholder-gray-500"
            placeholder="Confirm your password"
            required
          />
        </div>

        <div className="mb-3 flex justify-between">
          <Link to={"/login"} className="text-sm text-blue-500 cursor-pointer">
            Already have an account?
          </Link>
        </div>

        <button
          type="submit"
          className="bg-purple-700 hover:bg-purple-800 text-white font-bold py-3 px-6 rounded focus:outline-none focus:shadow-outline w-full transition duration-300 ease-in-out"
        >
          Register
        </button>
      </form>
    </div>
  );
}

export default RegisterUser;
