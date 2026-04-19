import React from "react";

const ErrorPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-linear-to-br from-indigo-500 via-purple-500 to-pink-500 px-4">
      <div className="bg-white rounded-2xl shadow-2xl p-10 text-center max-w-md w-full">
        
        {/* Big 404 */}
        <h1 className="text-7xl font-extrabold text-gray-800 mb-4">
          404
        </h1>

        {/* Title */}
        <h2 className="text-2xl font-semibold text-gray-700 mb-2">
          Page Not Found
        </h2>

        {/* Message */}
        <p className="text-gray-500 mb-6">
          Oops! The page you are looking for doesn't exist or has been moved.
        </p>

        {/* Button */}
        <button
          onClick={() => (window.location.href = "/")}
          className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-2 rounded-lg transition duration-300"
        >
          Go Home
        </button>

        {/* Extra */}
        <p className="text-sm text-gray-400 mt-6">
          Please check the URL and try again.
        </p>
      </div>
    </div>
  );
};

export default ErrorPage;