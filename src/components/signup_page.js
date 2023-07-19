import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { message } from "antd";
import axios from "axios";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import "../styles/signup_page.css";
import getIcons from "./common";

const SignupPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showPassword0, setShowPassword0] = useState(false);
  const dispatch = useDispatch();

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };
  const toggleShowPassword0 = () => {
    setShowPassword0(!showPassword0);
  };

  const handleSignup = async () => {
    if (!email || !password || !confirmPassword) {
      message.error("Fields cannot be left empty");
      return;
    }
    if (password !== confirmPassword) {
      message.error("Passwords do not match");
      return;
    }

    const user = {
      email: email,
      password: password,
    };
    try {
      //   dispatch(ShowLoading());
      const response = await axios.post("/auth/signup", user);
      //   dispatch(ShowLoading())
      if (response.data.success) {
        message.success(response.data.message);
      } else {
        message.error(response.data.message);
      }
    } catch (error) {
      //   dispatch(HideLoading());
      message.error(error.message);
    }
  };
  return (
    <div className="signup-page">
      <div class="text-4xl font-bold">Hi!</div>
      <div class="text-4xl font">Welcome to The Job Finder</div>
      <hr class="gap"></hr>
      <h4 className="text-4xl font-bold">Sign Up</h4>
      <hr class="gap"></hr>

      <div className="signup-form">
        <input
          type="text"
          placeholder="Email"
          class="input input-primary input-bordered w-full "
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <div class="password-input-container">
          <input
            type={showPassword ? "text" : "password"}
            placeholder="Password"
            class="input input-primary input-bordered w-full password-input"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          ></input>
          <button
            className={`password-toggle-button ${
              showPassword ? "visible" : ""
            }`}
            onClick={toggleShowPassword}
          >
            <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} />
          </button>
        </div>

        <div class="password-input-container">
          <input
            type={showPassword0 ? "text" : "password"}
            placeholder="Confirm Password"
            class="input input-primary input-bordered w-full"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          ></input>
          <button
            className={`password-toggle-button ${
              showPassword0 ? "visible" : ""
            }`}
            onClick={toggleShowPassword0}
          >
            <FontAwesomeIcon icon={showPassword0 ? faEyeSlash : faEye} />
          </button>
        </div>

        <button
          class="btn btn-primary h-10 w-60 rounded-full btn-xs sm:btn-sm md:btn-md lg:btn-lg"
          onClick={handleSignup}
        >
          Sign Up
        </button>
      </div>

      <div class=" divider-vertical">OR</div>

      {getIcons()}
      <p className="signup-login-link">
        Already have an account?{" "}
        <Link to={"/"}>
          <a href="/login">Log In</a>
        </Link>
      </p>
    </div>
  );
};

export default SignupPage;
