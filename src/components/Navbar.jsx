import React, { useState, useEffect } from 'react';
import './Nav.css';

export const Navbar = () => {
  const [hoveredStarIndex, setHoveredStarIndex] = useState(null);
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Check for saved theme in localStorage on component mount
  useEffect(() => {
    if (localStorage.getItem('theme') === 'dark') {
      setIsDarkMode(true);
      document.body.classList.add('dark');
    } else {
      setIsDarkMode(false);
      document.body.classList.remove('dark');
    }
  }, []);

  // Handle the toggle switch change
  const handleToggle = () => {
    setIsDarkMode(!isDarkMode);
    if (!isDarkMode) {
      document.body.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.body.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  };

  const handleStarMouseEnter = (index) => {
    setHoveredStarIndex(index);
  };

  const handleStarMouseLeave = () => {
    setHoveredStarIndex(null);
  };

  const handleLinkClick = (url) => {
    window.location.href = url;
  };

  const stars = [0, 1, 2, 3, 4]; // We are assuming 5 stars for this example

  return (
    <nav className="nav-container flex justify-between p-1 pl-8 pr-8 items-center ">
      <ul className="nav-left flex items-center">
        <li>
          <img
            src=".\src\assets\neev (1).svg"
            alt="Logo"
            width="45px"
            height="45px"
          />
        </li>
        <li className="text-3xl pl-4 text-slate-800 font-semibold">neev</li>
      </ul>
      <ul className="nav-right flex gap-4 ml-32">
        <button className="border rounded-md mr-6 border-blue-300 pl-2 pr-2 p-3 hover:shadow-lg hover:transition duration-500 hover:border-blue-700">
          <input type="date" name="" id="" />
        </button>
        <div className="toggle-switch">
          <label className="switch-label">
            <input
              type="checkbox"
              className="checkbox"
              checked={isDarkMode}
              onChange={handleToggle}
            />
            <span className="slider"></span>
          </label>
        </div>
        <button
          id="career"
          className="border border-black ml-6 rounded-md text-lg pl-2 pr-2 hover:transition hover:border-blue-300 hover:text-blue-400 hover:shadow-md hover:shadow-black"
          onClick={() => handleLinkClick('https://x.com/careers')}
        >
          Careers
        </button>
      </ul>
      <ul className="flex items-center space-x-6">
        <li>
          <div className="star-rating-container flex flex-col items-center space-y-4 p-6 w-64">
            <div className="flex space-x-2" id="rating-container">
              {stars.map((starIndex) => (
                <button
                  key={starIndex}
                  className={`star w-8 h-8 ${
                    hoveredStarIndex !== null && starIndex <= hoveredStarIndex
                      ? 'text-yellow-400'
                      : 'text-gray-300'
                  } hover:text-yellow-400 focus:outline-none`}
                  onMouseEnter={() => handleStarMouseEnter(starIndex)}
                  onMouseLeave={handleStarMouseLeave}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    className="w-full h-full"
                  >
                    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                  </svg>
                </button>
              ))}
            </div>
          </div>
        </li>
        <button
          className="hover:-translate-x-2 hover:-translate-y-2"
          id="link"
          onClick={() => handleLinkClick('https://x.com/NeevHQ')}
        >
          <img
            src="../src/assets/x.png"
            alt="X Logo"
            width="30px"
            height="30px"
          />
        </button>
      </ul>
    </nav>
  );
};
