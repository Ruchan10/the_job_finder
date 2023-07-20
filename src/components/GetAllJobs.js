import "@fortawesome/fontawesome-free/css/all.css";
import "@fortawesome/fontawesome-free/js/all.js";
import { message } from "antd";
import axios from "axios";
import React from "react";
import "../styles/home_page.css";
import "../tailwind.css";
import getCard from "./card";

export const GetAllJobs = ({ jobsData }) => {
  const handleAddBookmark = async (jobId) => {};
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 mt-8 card-container">
      {jobsData.map((job) => (
        <div>
          {getCard({
            logo: "path_to_logo_image",
            companyName: job.company,
            jobName: job.title,
            location: job.location,
            time: job.desc,
            bookmarked: false,
            addBookmark: () => handleAddBookmark(job._id),
          })}
        </div>
      ))}
    </div>
  );
};

export const GetBookmarked = ({ bookmarkData }) => {
  const handleUnbookmark = async (jobId) => {
    console.log("IN GETBOOKMARKED");
    console.log(jobId);
    console.log(bookmarkData._id);
    try {
      const accessToken = localStorage.getItem("token"); // You might need to adjust this based on how you store the access token
      if (!accessToken) {
        // If the access token is not available, handle the authentication error
        console.error("User not authenticated.");
        return;
      }
      const headers = {
        Authorization: `${accessToken}`,
      };
      const response = await axios.delete(`/jobs/removeBookmark/${jobId}`, {
        headers,
      });
      console.log(response);
      if (response.status === 200) {
        message.success(response.data.message);
      } else {
        message.error(response.data.message);
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 mt-8 card-container">
      {bookmarkData.map((job) => (
        <div key={job.id}>
          {getCard({
            logo: "path_to_logo_image",
            companyName: job.company,
            jobName: job.title,
            location: job.location,
            time: job.desc,
            bookmarked: true,
            onUnbookmark: () => handleUnbookmark(job._id),
          })}
        </div>
      ))}
    </div>
  );
};
