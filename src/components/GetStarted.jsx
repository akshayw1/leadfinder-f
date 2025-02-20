import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const GetStarted = () => {
  return (
    <Link
      to="/auth/signup"
      className="inline-block bg-gradient-to-r from-cyan-500 to-blue-500 p-[2px] rounded-md hover:from-cyan-600 hover:to-blue-600 transition-all duration-300 ease-in-out transform hover:scale-105"
    >
      <div className="flex items-center justify-center bg-primary px-6 py-3 rounded-md">
        <span className="font-poppins font-medium text-lg bg-gradient-to-r from-cyan-500 to-blue-500 bg-clip-text text-transparent">
          Get Started
        </span>
        <ArrowRight className="ml-2 w-5 h-5 text-blue-500" />
      </div>
    </Link>
  );
};

export default GetStarted;