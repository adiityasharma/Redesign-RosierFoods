import React, { useState } from "react";

function ForgotPassword() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [messageType, setMessageType] = useState(""); // 'success' or 'error'

  const handleSubmit = (event) => {
    event.preventDefault();
    setMessage(""); // Clear previous messages
    setMessageType("");

    // In a real application, you would send a request to your backend API
    // to initiate the password reset process for the given email.
    // The backend would then send a password reset link to the user's email.

    console.log("Password reset request for email:", email);

    // Simulate an API call success/failure
    if (email.includes("@") && email.includes(".")) {
      // Simple email format check
      setMessage(
        "If an account with that email exists, a password reset link has been sent."
      );
      setMessageType("success");
      setEmail(""); // Clear the email field
    } else {
      setMessage("Please enter a valid email address.");
      setMessageType("error");
    }
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
          Forgot Password?
        </h2>
        <p className="text-gray-400 text-center mb-6">
          Enter your email address below and we'll send you a link to reset your
          password.
        </p>

        {message && (
          <p className={`${messageClasses} text-sm p-3 rounded mb-4`}>
            {message}
          </p>
        )}

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

        <button
          type="submit"
          className="bg-purple-700 hover:bg-purple-800 text-white font-bold py-3 px-6 rounded focus:outline-none focus:shadow-outline w-full transition duration-300 ease-in-out"
        >
          Send Reset Link
        </button>
      </form>
    </div>
  );
}

export default ForgotPassword;
