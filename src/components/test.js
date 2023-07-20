import React, { useState } from "react";
import { AiOutlineHome } from "react-icons/ai";
import { BsBookmark } from "react-icons/bs";
import { IoBriefcaseOutline, IoDocumentsOutline } from "react-icons/io5";
import { Link, useLocation } from "react-router-dom";
import "../styles/Navbar.css";
import "../styles/test.css";
import "../tailwind.css";

const Navbar = () => {
  const location = useLocation();
  const [activeButton, setActiveButton] = useState(location.pathname);
  const [sidebarOpen, setSidebarOpen] = useState(false); // Add state for sidebar open/close

  const handleButtonClick = (path) => {
    setActiveButton(path);
    // Close the sidebar when a link is clicked
    setSidebarOpen(false);
  };

  const isButtonActive = (path) => {
    return activeButton === path;
  };

  return (
    <div className={`navbar bg-neutral ${sidebarOpen ? "sidebar-open" : ""}`}>
      {/* Hamburger Icon to Toggle Sidebar */}
      <div
        className={`hamburger-icon ${sidebarOpen ? "open" : ""}`}
        onClick={() => setSidebarOpen(!sidebarOpen)}
      >
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
      </div>

      {/* Collapsible Sidebar */}
      <div className={`sidebar ${sidebarOpen ? "sidebar-open" : ""}`}>
        <div className="tabs-boxed">
          <Link to="/home">
            <div
              className={`tab ${isButtonActive("/home") ? "tab-active" : ""}`}
              onClick={() => handleButtonClick("/home")}
            >
              <AiOutlineHome className="tab-icon" />
              <span>Home</span>
            </div>
          </Link>
          <Link to="/bookmark">
            <div
              className={`tab ${
                isButtonActive("/bookmark") ? "tab-active" : ""
              }`}
              onClick={() => handleButtonClick("/bookmark")}
            >
              <BsBookmark className="tab-icon" />
              <span>
                Bookmark
                <span className="badge badge-sm">9</span>
              </span>
            </div>
          </Link>
          <Link to="/application">
            <div
              className={`tab ${
                isButtonActive("/application") ? "tab-active" : ""
              }`}
              onClick={() => handleButtonClick("/application")}
            >
              <IoDocumentsOutline className="tab-icon" />
              <span>Applications</span>
            </div>
          </Link>
          <Link to="/addjob">
            <div
              className={`tab ${isButtonActive("/addjob") ? "tab-active" : ""}`}
              onClick={() => handleButtonClick("/addjob")}
            >
              <IoBriefcaseOutline className="tab-icon" />
              <span> Add Job</span>
            </div>
          </Link>
        </div>
      </div>

      {/* Rest of the Navbar */}
      <div className="navbar-center">
        <div className="text-3xl font-bold">The Job Finder</div>
      </div>
      <div className="navbar-end">
        {/* ... */}
        {/* (remaining code of the Navbar component) */}
        {/* ... */}
      </div>
    </div>
  );
};

export default Navbar;
