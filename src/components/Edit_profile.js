import { message } from "antd";
import axios from "axios";
import React, { useRef, useState } from "react";
import "../styles/edit_profile.css";
import Footer from "./Footer";
import Navbar from "./Navbar";

export default function EditProfile() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [num, setNum] = useState("");
  const [cvFile, setCvFile] = useState(null);
  const fileInputRef = useRef(null);
  const [seeProfile, setAvatarImage] = useState(null);
  const [profile, setProfile] = useState(null);

  const handleEditProfile = async () => {
    const accessToken = localStorage.getItem("token");
    if (!accessToken) {
      // If the access token is not available, handle the authentication error
      console.error("User not authenticated.");
      return;
    }

    if (!fullName || !num) {
      message.error("Fields cannot be left empty");
      return;
    }
    const formData = new FormData();
    formData.append("fullName", fullName);
    // formData.append("email", email);
    formData.append("phoneNumber", num);
    formData.append("cv", cvFile);
    formData.append("profile", profile);

    const headers = {
      Authorization: `${accessToken}`,
      "Content-Type": "multipart/form-data",
    };
    try {
      const response = await axios.post("/users/editProfile", formData, {
        headers,
      });
      console.log(response);
      if (response.status === 200) {
        message.success(response.data.message);
      } else {
        message.error(response.data.message);
      }
    } catch (error) {
      message.error(error.message);
    }
  };

  const handleAvatarClick = () => {
    // Trigger the click event on the file input
    fileInputRef.current.click();
  };
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setProfile(file);
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        // Set the avatarImage state with the selected file data
        setAvatarImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setCvFile(file);
  };
  return (
    <div>
      <Navbar />
      <div
        className="flex flex-col min-h-screen"
        style={{
          padding: "20px",
        }}
      >
        <div
          class="text-4xl font-bold"
          style={{ marginBottom: "50px", marginTop: "-10px" }}
        >
          Edit Profile
        </div>
        <div style={{ padding: "20px" }}>
          <p
            className="mt-1 text-sm leading-6 text-gray-600"
            style={{ marginBottom: "20px" }}
          >
            This information will be displayed publicly so be careful what you
            share.
          </p>

          <div class="avatar pp">
            <div class="w-32 rounded-full" style={{ marginLeft: "-230px" }}>
              <button onClick={handleAvatarClick}>
                <img src={seeProfile} alt="Profile" />
              </button>
              <input
                type="file"
                class="file-input file-input-bordered file-input-success w-full max-w-xs"
                ref={fileInputRef}
                style={{ display: "none" }}
                onChange={handleImageChange}
              />
            </div>
          </div>

          <div className=" flex flex-row" style={{ marginBottom: "20px" }}>
            <div
              className="flex  mt-4 w-full max-w-xs"
              style={{ marginRight: "60px" }}
            >
              <input
                type="text"
                placeholder="Full Name"
                className="input input-bordered input-accent w-full"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
              />
            </div>
          </div>

          <div
            className="mt-4 w-full max-w-xs"
            style={{ marginBottom: "15px" }}
          >
            <input
              type="text"
              placeholder="Phone Number"
              className="input input-bordered input-accent w-full"
              value={num}
              onChange={(e) => setNum(e.target.value)}
            />
          </div>
          <div className="flex flex=col" style={{ marginBottom: "20px" }}>
            <div class="text-2xl" style={{ marginRight: "20px" }}>
              CV
            </div>
            <input
              name="cv"
              type="file"
              class="file-input file-input-bordered file-input-success w-72"
              onChange={handleFileChange}
            />
          </div>
          <p
            className="mt-1 text-sm leading-6 text-gray-600"
            style={{ marginBottom: "20px" }}
          >
            Your CV will be sent to employer when you apply for a job.
          </p>
        </div>
        <button
          style={{ marginTop: "30px" }}
          class="btn btn-primary h-10 w-60 rounded-full btn-xs sm:btn-sm md:btn-md lg:btn-lg"
          onClick={handleEditProfile}
        >
          Update Profile
        </button>
      </div>
      <Footer />
    </div>
  );
}
