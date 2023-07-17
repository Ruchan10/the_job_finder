import '@fortawesome/fontawesome-free/css/all.css';
import '@fortawesome/fontawesome-free/js/all.js';
import React, { useState } from 'react';
import { AiOutlineHome } from "react-icons/ai";
import { BsBookmark } from "react-icons/bs";
import fbLogo from '../assets/images/facebook-logo.png';
import logo from '../assets/images/jobFinderLogo.jpg';
import pp from '../assets/images/pp.webp';
import redditLogo from '../assets/images/reddit-logo.png';
import twitterLogo from '../assets/images/twitter-logo.png';
import ytLogo from '../assets/images/youtube-logo.webp';
import '../styles/home_page.css';
import '../tailwind.css';

const HomePage = () => {
    const [isSidebarOpen, setSidebarOpen] = useState(false);
  
    const handleProfileClick = () => {
        setSidebarOpen(!isSidebarOpen);
    };
  
    return (
      <div>
<div class="navbar bg-neutral">
  <div class="navbar-start">
    <ul class="menu  lg:menu-horizontal">
  <li>
    <a>
      <AiOutlineHome/>
      Home
    </a>
  </li>
  <li>
    <a>
      <BsBookmark/>
      Bookmark
      <span class="badge badge-sm">9</span>
    </a>
  </li>
  
</ul>
  </div>
  
  <div class="navbar-center">
<div class="text-3xl font-bold">The Job Finder</div>

  </div>
  <div class="navbar-end">
    <div class="form-control">
      <input type="text" placeholder="Search" class="input input-bordered w-24 md:w-auto" />
    </div>
   
    <div class="dropdown dropdown-end">
    <button class="btn btn-ghost btn-circle">
      <div class="indicator">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" /></svg>
        <span class="badge badge-xs badge-primary indicator-item"></span>
      </div>
    </button>
      <ul tabindex="0" class="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
        <li>
          <a>Noti 1</a>
        </li>
        <li><a>Noti 2</a></li>
        <li><a>Noti 3</a></li>
      </ul>
    </div>
    <div class="dropdown dropdown-end">
      <label tabindex="0" class="btn btn-ghost btn-circle avatar">
        <div class="w-10 rounded-full">
          <img src={pp} alt="pp"/>
        </div>
      </label>
      <ul tabindex="0" class="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
        <li>
          <a class="justify-between">
            Profile
          </a>
        </li>
        <li><a>Settings</a></li>
        <li><a>Logout</a></li>
      </ul>
    </div>
  </div>
</div>
<div>
    TESTING
</div>

<footer class="footer p-10 bg-neutral text-neutral-content">
  <div>
  <svg width="50" height="50" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
  <image href={logo} width="24" height="24" />
</svg>

    <p>The Job Finder Pvt Ltd.<br/>We bring the employers and job seekers closer</p>
  </div> 
  <div>
    <span class="footer-title">Socials</span> 
    <div class="grid grid-flow-col gap-4">
      <a><svg width="50" height="50" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
  <image href={fbLogo} width="24" height="24" />
</svg>
</a> 
      <a><svg width="50" height="50" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
  <image href={twitterLogo} width="24" height="24" />
</svg>
</a> 
      <a><svg width="50" height="50" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
  <image href={redditLogo} width="24" height="24" />
</svg>
</a>
<a><svg width="50" height="50" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
  <image href={ytLogo} width="24" height="24" />
</svg>
</a>
    </div>
  </div>
</footer>
      </div>
    );
  };
  
  export default HomePage;