import "@fortawesome/fontawesome-free/css/all.css";
import "@fortawesome/fontawesome-free/js/all.js";
import axios from "axios";
import jwtDecode from "jwt-decode";
import { React, useEffect, useState } from "react";
import "../styles/application.css";
import "../tailwind.css";
import Footer from "./Footer";
import { GetAppliedJobs, GetCreatedJobs } from "./GetAllJobs";
import Navbar from "./Navbar";

const ApplicationPage = () => {
  const [activeTab, setActiveTab] = useState("applied");
  const [appliedJobs, setAppliedJobs] = useState([]);
  const [createdJobs, setCreatedJobs] = useState([]);

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };
  const getAppliedJobs = async () => {
    console.log("IN GETAPPLIEDJOBS FUNCTION");
    try {
      // Get the access token from your authentication system
      const accessToken = localStorage.getItem("token"); // You might need to adjust this based on how you store the access token
      if (!accessToken) {
        // If the access token is not available, handle the authentication error
        console.error("User not authenticated.");
        return;
      }

      // Set the Authorization header with the access token
      const headers = {
        Authorization: `${accessToken}`,
      };

      const response = await axios.get("/jobs/getAppliedJobs", { headers });
      console.log(response);
      if (response.data.success) {
        setAppliedJobs(response.data.data);
      } else {
        console.error(response.data.message);
      }
    } catch (error) {
      console.error(error);
    }
  };
  const getCreatedJobs = async () => {
    try {
      // Get the access token from your authentication system
      const accessToken = localStorage.getItem("token"); // You might need to adjust this based on how you store the access token
      const userId = jwtDecode(accessToken).userId;
      if (!accessToken) {
        // If the access token is not available, handle the authentication error
        console.error("User not authenticated.");
        return;
      }

      // Set the Authorization header with the access token
      const headers = {
        Authorization: `${accessToken}`,
      };

      const response = await axios.get(`/jobs/user/${userId}`, { headers });
      console.log(response);
      if (response.data.success) {
        setCreatedJobs(response.data.data);
      } else {
        console.error(response.data.message);
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getAppliedJobs();
    getCreatedJobs();
  }, []);
  return (
    <div>
      <Navbar />
      <div class="tabs">
        <a
          className={`tab tab-lifted ${
            activeTab === "applied" ? "tab-active" : ""
          }`}
          onClick={() => handleTabClick("applied")}
          tabIndex="0"
        >
          Applied
        </a>
        <a
          className={`tab tab-lifted ${
            activeTab === "received" ? "tab-active" : ""
          }`}
          onClick={() => handleTabClick("received")}
          tabIndex="0"
        >
          Received
        </a>
        <a
          className={`tab tab-lifted ${
            activeTab === "created" ? "tab-active" : ""
          }`}
          onClick={() => handleTabClick("created")}
          tabIndex="0"
        >
          Created Jobs
        </a>
      </div>
      {activeTab === "applied" && (
        <GetAppliedJobs
          appliedJobsData={appliedJobs}
          getAppliedJobs={getAppliedJobs}
        />
      )}
      {activeTab === "created" && (
        <GetCreatedJobs
          createdJobsData={createdJobs}
          getCreatedJobs={getCreatedJobs}
        />
      )}
      <Footer />
    </div>
  );
};

export default ApplicationPage;
