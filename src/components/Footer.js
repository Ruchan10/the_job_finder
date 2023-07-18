import '@fortawesome/fontawesome-free/css/all.css';
import '@fortawesome/fontawesome-free/js/all.js';
import { React } from 'react';
import { BsFacebook, BsReddit, BsTwitter, BsYoutube } from "react-icons/bs";
import logo from '../assets/images/jobFinderLogo.png';

import '../styles/Footer.css';
import '../styles/home_page.css';
import '../tailwind.css';

export default function Footer() {
  return (
    <div>
        
<footer class="footer p-10 bg-neutral text-neutral-content footer-height">
  <div>
  <svg width="60" height="60" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
  <image href={logo} width="24" height="24" />
</svg>

    <p>The Job Finder Pvt Ltd.<br/>We bring the employers and job seekers closer</p>
  </div>
  <div class="footer-contact">
            <span class="footer-title">Contact Us</span>
            <p>Email: info@jobfinder.com</p>
            <p>Phone: +1 123 456 7890</p>
          </div>
  <div class ="footer-socials">

  <div>
    <span class="footer-title">Socials</span> 
    <div class="grid grid-flow-col gap-4">
        <a href='https://www.facebook.com/Jobfinder.support/' target="_blank" rel="noreferrer">  <BsFacebook style={{fontSize:'40px'}}/>

</a> 
    
<a href='https://twitter.com/rukkumari' target="_blank" rel="noreferrer">  <BsTwitter style={{fontSize:'40px'}}/>

</a> 
      <a href='https://www.reddit.com/r/thejobfinder/' target="_blank" rel="noreferrer">
  <BsReddit style={{fontSize:'40px'}}/>
</a>
<a href='https://www.youtube.com/hashtag/jobfinder' target="_blank" rel="noreferrer">
  <BsYoutube style={{fontSize:'40px'}}/>

</a>
    </div>
  </div>
  
  </div>

</footer>
    </div>

  )
}
