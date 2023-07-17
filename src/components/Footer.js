import '@fortawesome/fontawesome-free/css/all.css';
import '@fortawesome/fontawesome-free/js/all.js';
import { React } from 'react';
import fbLogo from '../assets/images/facebook-logo.png';
import logo from '../assets/images/jobFinderLogo.jpg';
import redditLogo from '../assets/images/reddit-logo.png';
import twitterLogo from '../assets/images/twitter-logo.png';
import ytLogo from '../assets/images/youtube-logo.webp';
import '../styles/Footer.css';
import '../styles/home_page.css';
import '../tailwind.css';

export default function Footer() {
  return (
    <div>
        
<footer class="footer p-10 bg-neutral text-neutral-content footer-height">
  <div>
  <svg width="50" height="50" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
  <image href={logo} width="24" height="24" />
</svg>

    <p>The Job Finder Pvt Ltd.<br/>We bring the employers and job seekers closer</p>
  </div> 
  <div>
    <span class="footer-title">Socials</span> 
    <div class="grid grid-flow-col gap-4">
      <a><svg width="40" height="40" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
  <image href={fbLogo} width="24" height="24" />
</svg>
</a> 
      <a><svg width="40" height="40" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
  <image href={twitterLogo} width="24" height="24" />
</svg>
</a> 
      <a><svg width="40" height="40" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
  <image href={redditLogo} width="24" height="24" />
</svg>
</a>
<a><svg width="40" height="40" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
  <image href={ytLogo} width="24" height="24" />
</svg>
</a>
    </div>
  </div>
</footer>
    </div>

  )
}
