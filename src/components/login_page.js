import React from 'react';
import { Link } from 'react-router-dom';
import appleLogo from '../assets/images/apple-logo.png';
import facebookLogo from '../assets/images/facebook-logo.png';
import googleLogo from '../assets/images/google-logo.png';
import '../styles/login_page.css';
const LoginPage = () => {

  return (
    <div className="login-page">
        <h2 className="login-heading">Hi!</h2>
        <h3 className="login-subheading">Welcome Back</h3>
        <h4 className="login-title">Log In</h4>

        <div className="login-form">
        <input type="text" placeholder="Email" />
        <input type="password" placeholder="Password" />
        <button className="login-button"><Link to={'/home'}><a href="/home">Log In</a></Link></button>
      </div>
      <div className="login-divider">
        <span className="login-divider-text">OR</span>
      </div>
          <div className="login-social-logos">
            <img src={googleLogo} alt="Google" className="login-social-logo" />
            <img src={facebookLogo} alt="Facebook" className="login-social-logo" />
            <img src={appleLogo} alt="Apple" className="login-social-logo" />
          </div>

          <p className="signup-login-link">Don't have an account? <Link to ={'/signup'}><a href="/signup">Sign Up</a></Link></p>

 
    </div>
  );
}

export default LoginPage;
