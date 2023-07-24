import axios from "axios";
import React, { useState } from "react";
import { AiOutlineDelete } from "react-icons/ai";
import { BsApple, BsFacebook, BsGoogle } from "react-icons/bs";
import "../styles/card.css";
import "../styles/signup_page.css";

export function getIcons() {
  return (
    <div className="signup-social-logos">
      <BsGoogle style={{ fontSize: "30px", "padding-right": "10px" }} />
      <BsApple style={{ fontSize: "30px", "padding-right": "10px" }} />
      <BsFacebook style={{ fontSize: "30px", "padding-right": "10px" }} />
    </div>
  );
}

export function GetUserPill({
  logo,
  email,
  fullName,
  num,
  reject,
  cv,
  title,
  accept,
  applicants,
}) {
  const [applicant, setApplicant] = useState([]);

  const getUserDetails = async (applicants) => {
    try {
      const response = await axios.get(`/auth/getUser/${applicants}`);
      if (!applicants) {
        return;
      }
      setApplicant(response.data.data);
    } catch (error) {
      console.error(error);
    }
  };
  getUserDetails(applicants);
  if(!applicant.email){
    return;
  }
  return (
    <div class="spacer card w-96 bg-primary text-primary-content">
      <div className="card-header">
        <img src={applicant.logo} alt="Logo" className="logo" />
        <div className="text-xl font">{applicant.fullName}</div>
      </div>
      <div class="card-body">
        <h3 class="card-title">{applicant.title}</h3>
        <h3 class="card-title">{applicant.email}</h3>
        <h3 class="card-title">{applicant.num}</h3>
        <div class="card-actions justify-end">
          <button onClick={reject} class="btn btn-sm">
            <AiOutlineDelete />
          </button>
          <button onClick={cv} className="btn btn-sm">
            CV
          </button>
          <button onClick={accept} className="btn btn-sm">
            Accept
          </button>
        </div>
      </div>
    </div>
  );
}
