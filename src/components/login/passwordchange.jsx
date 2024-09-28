import React, { useState } from "react";

const PasswordReset = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    // Add your form submit logic here
    alert(`Password reset link sent to: ${email}`);
  };

  return (
    <div className="flex justify-center items-center h-screen ml-[850px]">
      <div className="bg-white  p-6 rounded-lg w-full max-w-md">
        <h2 className="text-lg text-purple-700 font-semibold text-center mb-4">
          Did you forget password?
        </h2>
        <p className="text-sm text-gray-500 text-center mb-6">
          Enter your email address and we’ll send you a link to restore password
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="email" className="block text-gray-700 mb-2">
              Email Address
            </label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full p-2 border border-gray-300 rounded"
              placeholder="Enter your email"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-purple-600 text-white p-2 rounded hover:bg-purple-700 transition"
          >
            Request reset link
          </button>
        </form>

        <div className="text-center mt-4">
          <a href="/" className="text-sm text-gray-500 hover:text-gray-700">
            Back to log in
          </a>
        </div>
      </div>
    </div>
  );
};

export default PasswordReset;
