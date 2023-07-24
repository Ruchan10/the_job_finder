import { message } from "antd";
import axios from "axios";
import React, { useState } from "react";
import pp from "../assets/images/pp.webp";
import Footer from "./Footer";
import Navbar from "./Navbar";

export default function EditProfile() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [num, setNum] = useState("");
  const [cvFile, setCvFile] = useState(null);

  const handleEditProfile = async () => {
    const accessToken = localStorage.getItem("token");
    if (!accessToken) {
      // If the access token is not available, handle the authentication error
      console.error("User not authenticated.");
      return;
    }

    if (!fullName || !email || !num) {
      message.error("Fields cannot be left empty");
      return;
    }
    const formData = new FormData();
    formData.append("fullName", fullName);
    formData.append("email", email);
    formData.append("phoneNumber", num);
    formData.append("cv", cvFile);

    const headers = {
      Authorization: `${accessToken}`,
      "Content-Type": "multipart/form-data",
    };
    try {
      const response = await axios.post("/users/editProfile", formData, {
        headers,
      });
      console.log(response);
      if (response.status === 201) {
        message.success(response.data.message);
      } else {
        message.error(response.data.message);
      }
    } catch (error) {
      message.error(error.message);
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
        className="flex flex-col items-center justify-center min-h-screen"
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
          <label tabindex="0" class="btn btn-ghost btn-circle avatar">
            <div class="w-20 rounded-full">
              <img src={pp} alt="pp" />
            </div>
          </label>
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

          <div className="mt-4 w-full max-w-xs">
            <input
              type="text"
              placeholder="Change Email"
              className="input input-bordered input-accent w-full"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
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
