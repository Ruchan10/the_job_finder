import '@fortawesome/fontawesome-free/css/all.css';
import '@fortawesome/fontawesome-free/js/all.js';
import React, { useState } from 'react';
import profilePicture from '../assets/images/pp.webp';
import '../styles/home_page.css';
import Sidebar from './side_bar.js';


const HomePage = () => {
    const [isSidebarOpen, setSidebarOpen] = useState(false);
  
    const handleProfileClick = () => {
        setSidebarOpen(!isSidebarOpen);
    };
  
    return (
      <div>
        <div class="topbar">
          <div class="topbar-left">
            <span class="welcome-message">Welcome Home</span>
            <div className="topbar-username">User Name</div>
          </div>
          <div class="topbar-right">
            <i class="fas fa-bell topbar-icon"></i>
            <img src={profilePicture} alt="ProfilePicture" class="profile-picture" />
          </div>
        </div>
  
        <div class="bottom-bar">
          <button class="bottom-bar-button">
            <i class="fas fa-home"></i>
            Home
          </button>
          <button class="bottom-bar-button">
            <i class="fas fa-bookmark"></i>
            Bookmark
          </button>
          <div class="floating-button">
            <i class="fas fa-plus"></i>
          </div>
          <button class="bottom-bar-button">
            <i class="fas fa-search"></i>
            Search
          </button>
          <button class="bottom-bar-button" onClick={handleProfileClick}>
            <i className="fas fa-user"></i>
            Profile
          </button>
          
        </div>
  
        {isSidebarOpen && <Sidebar />}
      </div>
    );
  };
  
  export default HomePage;