import "@fortawesome/fontawesome-free/css/all.css";
import "@fortawesome/fontawesome-free/js/all.js";
import { message } from "antd";
import axios from "axios";
import jwtDecode from "jwt-decode";
import React, { useEffect } from "react";
import "../styles/home_page.css";
import "../tailwind.css";
import getCard from "./card";

const checkUserBookmark = (job, userId) => {
  console.log("IN CHECK USER BOOKMARK");
  console.log(job.bookmarkedBy);
  if (!!job.bookmarkedBy && job.bookmarkedBy.includes(userId)) {
    return true;
  }
  return false;
};
const handleUnbookmark = async (jobId) => {
  console.log("IN GETBOOKMARKED");
  try {
    const accessToken = localStorage.getItem("token"); // You might need to adjust this based on how you store the access token
    var userId = jwtDecode(localStorage.getItem("token")).userId;
    console.log(userId);
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
export const GetAllJobs = ({ jobsData, getJobs }) => {
  // Function to check if the user ID exists in the job.bookmarkedBy array

  const handleAddBookmark = async (jobId) => {
    try {
      const accessToken = localStorage.getItem("token");
      if (!accessToken) {
        message.error("Not Authorized");
        return;
      }
      const headers = {
        Authorization: `${accessToken}`,
      };
      const response = await axios.post(`/jobs/addBookmark/${jobId}`, null, {
        headers,
      });
      console.log(`/jobs/addBookmark/${jobId}`);

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
  useEffect(() => {
    getJobs();
  }, [getJobs]);

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
            bookmarked: checkUserBookmark(
              job,
              jwtDecode(localStorage.getItem("token")).userId
            ),
            onUnbookmark: () => handleUnbookmark(job._id),
            addBookmark: () => handleAddBookmark(job._id),
          })}
        </div>
      ))}
    </div>
  );
};

export const GetBookmarked = ({ bookmarkData, getBookmarks }) => {
  useEffect(() => {
    getBookmarks();
  }, [getBookmarks]);

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
            bookmarked: checkUserBookmark(
              job,
              jwtDecode(localStorage.getItem("token")).userId
            ),
            onUnbookmark: () => handleUnbookmark(job._id),
          })}
        </div>
      ))}
    </div>
  );
};
