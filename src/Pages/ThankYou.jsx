// src/pages/ThankYou.jsx
import { Link } from "react-router-dom";
import { CheckCircle2 } from "lucide-react";

export default function ThankYou() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50 px-4">
      <div className="bg-white shadow-lg rounded-2xl p-8 max-w-md w-full text-center">
        <CheckCircle2 className="mx-auto h-16 w-16 text-green-500" />
        <h1 className="mt-4 text-2xl font-bold text-gray-800">
          Thank You! 🎉
        </h1>
        <p className="mt-2 text-gray-600">
          Your message has been sent successfully.  
          I’ll get back to you as soon as possible. 🚀
        </p>
        <Link
          to="/"
          className="mt-6 inline-block px-6 py-3 bg-blue-600 text-white font-medium rounded-xl shadow hover:bg-blue-700 transition"
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
}
