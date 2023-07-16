import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import appleLogo from '../assets/images/apple-logo.png';
import facebookLogo from '../assets/images/facebook-logo.png';
import googleLogo from '../assets/images/google-logo.png';
import '../styles/signup_page.css';

const SignupPage = () => {
  return (
    <div className="signup-page">
      <h2 className="signup-heading">Hi!</h2>
      <h3 className="signup-subheading">Welcome to The Job Finder</h3>
      <h4 className="signup-title">Sign Up</h4>
      
      <div className="signup-form">
        <input type="text" placeholder="Email" />
        <input type="password" placeholder="Password" />
        <input type="password" placeholder="Confirm Password" />
        <button className="signup-button">Sign Up</button>
      </div>
      <div className="signup-divider">
        <span className="signup-divider-text">OR</span>
      </div>
      <div className="signup-social-logos">
        <img src={facebookLogo} alt="Facebook" className="signup-social-logo" />
        <img src={googleLogo} alt="Google" className="signup-social-logo" />
        <img src={appleLogo} alt="Apple" className="signup-social-logo" />
      </div>
      <p className="signup-login-link">Already have an account? <Link to ={'/'}><a href="/login">Log In</a></Link></p>
    </div>
  );
};

export default SignupPage;
