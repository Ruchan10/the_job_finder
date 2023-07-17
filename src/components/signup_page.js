import React from 'react';
import { Link } from 'react-router-dom';
import appleLogo from '../assets/images/apple-logo.png';
import facebookLogo from '../assets/images/facebook-logo.png';
import googleLogo from '../assets/images/google-logo.png';
import '../styles/signup_page.css';

const SignupPage = () => {

  return (
    <div className="signup-page">
      <div class="text-4xl font-bold">Hi!</div>
      <div class="text-4xl font">Welcome to The Job Finder</div>
      <hr class="gap"></hr>
      <h4 className="text-4xl font-bold">Sign Up</h4>
      <hr class="gap"></hr>

      <div className="signup-form">
        <input type="text" placeholder="Email" class="input input-primary input-bordered w-full"></input>
        <input type="text" placeholder="Password" class="input input-primary input-bordered w-full"></input>
        <input type="text" placeholder="Confirm Password" class="input input-primary input-bordered w-full"></input>
        <button class="btn btn-primary h-10 w-60 rounded-full">SignUp</button>
      </div>

      <div className="signup-divider">
        <div class="text-sm font">OR</div>
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
