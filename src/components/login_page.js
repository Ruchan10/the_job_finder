import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { message } from "antd";
import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../styles/login_page.css";
import { useAuth } from "../utils/authContext";
import getIcons from "./common";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };
  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();
  // const dispatch = useDispatch()
  const auth = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email || !password) {
      message.error("Fields cannot be left empty");
    } else {
      const user = {
        email: email,
        password: password,
      };
      auth.setEmail(user.email);

      const response = await axios.post("/auth/login", user);
      console.log(response.status === 200);
      if (response.status === 200) {
        navigate("/home");
        console.log("IN HOME?");
        message.success(response.data.message);
        localStorage.setItem("token", response.data.data);
      } else {
        // console.log(response.data.message)
        message.error(response.data.message);
      }
    }
  };
  return (
    <div className="login-page dir=rtl">
      <div class="text-4xl font-bold">Hi!</div>

      <div class="text-4xl font">Welcome Back</div>
      <hr class="gap"></hr>
      <h4 className="text-4xl font-bold">Log In</h4>
      <hr class="gap"></hr>

      <div className="login-form">
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
        <button
          class="btn btn-primary h-10 w-60 rounded-full btn-xs sm:btn-sm md:btn-md lg:btn-lg"
          onClick={handleSubmit}
        >
          Log In
        </button>
      </div>
      <div class=" divider-vertical">OR</div>

      {getIcons()}

      <p className="signup-login-link">
        Don't have an account?{" "}
        <Link to={"/signup"}>
          <a href="/signup">Sign Up</a>
        </Link>
      </p>
    </div>
  );
};

export default LoginPage;
