import React, { useState } from 'react';
import bannerImage from './assets/Banner/group-diverse-grads-throwing-caps-up-sky.jpg';

const App = () => {
  const [currentPage, setCurrentPage] = useState(null);

  const handleSignUpClick = () => {
    setCurrentPage("/signup");
  }

  const handleLoginClick = () => {
    setCurrentPage("/login");
  }

  // Render different content based on the current page state
  let content;
  switch (currentPage) {
    case "/signup":
      content = <SignUpPage />;
      break;
    case "/login":
      content = <LoginPage />;
      break;
    default:
      content = (
        <div className="w-full lg:w-1/2 flex flex-col justify-center items-center px-6 lg:px-0">
          <h1 className="text-4xl lg:text-5xl xl:text-6xl font-extrabold text-white mb-8 text-center">
            <span className="block xl:inline">Welcome to Versity</span>{' '}
            <span className="block text-yellow-400 xl:inline">Management System</span>
          </h1>
          <p className="text-base lg:text-lg xl:text-xl text-gray-300 mb-8 text-center">
            Streamlining education for tomorrow's leaders.
          </p>
          <div className="flex flex-col lg:flex-row">
            <div
              onClick={handleSignUpClick}
              className="cursor-pointer w-full lg:w-auto flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-gray-900 bg-yellow-400 hover:bg-yellow-500 md:py-4 md:text-lg md:px-10 mb-4 lg:mb-0 lg:mr-4"
            >
              Sign Up
            </div>
            <div
              onClick={handleLoginClick}
              className="cursor-pointer w-full lg:w-auto flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-yellow-400 bg-gray-800 hover:bg-gray-700 md:py-4 md:text-lg md:px-10"
            >
              Log In
            </div>
          </div>
        </div>
      );
  }

  return (
    <div className="relative h-screen w-full bg-gray-900 overflow-hidden flex">
      <div className="w-full lg:w-1/2 bg-cover bg-center" style={{ backgroundImage: `url(${bannerImage})` }}>
      </div>
      {content}
    </div>
  );
};

const SignUpPage = () => {
  return (
    <div className="w-full lg:w-1/2 flex flex-col justify-center items-center px-6 lg:px-0">
      <h1 className="text-4xl lg:text-5xl xl:text-6xl font-extrabold text-white mb-8 text-center">
        Sign Up Page
      </h1>
      {/* Add your sign-up form here */}
    </div>
  );
};

const LoginPage = () => {
  return (
    <div className="w-full lg:w-1/2 flex flex-col justify-center items-center px-6 lg:px-0">
      <h1 className="text-4xl lg:text-5xl xl:text-6xl font-extrabold text-white mb-8 text-center">
        Login Page
      </h1>
      {/* Add your login form here */}
    </div>
  );
};

export default App;
