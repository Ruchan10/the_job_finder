import React from 'react';
import { Link } from 'react-router-dom';
import appleLogo from '../assets/images/apple-logo.png';
import facebookLogo from '../assets/images/facebook-logo.png';
import googleLogo from '../assets/images/google-logo.png';
import '../styles/login_page.css';
const LoginPage = () => {

  return (
<div className="login-page dir=rtl" >

<div class="text-4xl font-bold">Hi!</div>

<div class="text-4xl font">Welcome Back</div>
<hr class="gap"></hr>
<h4 className="text-4xl font-bold">Log In</h4>
<hr class="gap"></hr>

  <div className="login-form">
  <input type="text" placeholder="Email" class="input input-primary input-bordered w-full"></input>
  <input type="text" placeholder="Password" class="input input-primary input-bordered w-full "></input>
  <button class="btn btn-primary h-10 w-60 rounded-full btn-xs sm:btn-sm md:btn-md lg:btn-lg"><Link to={'/home'}><a href="/home">Log In</a></Link></button>
</div>
<div class=" divider-vertical">OR</div>

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
