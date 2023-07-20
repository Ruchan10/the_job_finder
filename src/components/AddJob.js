import { message } from "antd";
import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Footer from "./Footer";
import Navbar from "./Navbar";

export default function AddJob() {
  const [name, setName] = useState("");
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [salary, setSalary] = useState("");
  const [location, setLocation] = useState("");
  const [jobTime, setJobTime] = useState("Job Time");

  const handleJobTime = (option) => {
    setJobTime(option);
  };
  const navigate = useNavigate();

  const handleAddJob = async () => {
    const accessToken = localStorage.getItem("token");
    if (!accessToken) {
      // If the access token is not available, handle the authentication error
      console.error("User not authenticated.");
      return;
    }

    if (!name || !title || !desc || !salary) {
      message.error("Fields cannot be left empty");
      return;
    }
    if (jobTime === "Job Time") {
      message.error("Please select job time");
      return;
    }
    const job = {
      title: title,
      desc: desc,
      company: name,
      location: location,
    };
    const headers = {
      Authorization: `${accessToken}`,
    };
    try {
      const response = await axios.post("/jobs/", job, { headers });
      console.log(response);
      if (response.status === 201) {
        navigate(-1);
        message.success(response.data.message);
      } else {
        message.error(response.data.message);
      }
    } catch (error) {
      message.error(error.message);
    }
  };
  return (
    <div>
      <Navbar />
      <div
        className="flex flex-col items-center justify-center min-h-screen"
        style={{
          padding: "30px",
        }}
      >
        <div class="text-4xl font-bold" style={{ marginBottom: "50px" }}>
          Add Job
        </div>
        <div style={{ padding: "20px" }}>
          <p
            className="mt-1 text-sm leading-6 text-gray-600"
            style={{ marginBottom: "20px" }}
          >
            This information will be displayed publicly so be careful what you
            share.
          </p>
          <div className=" flex flex-row" style={{ marginBottom: "20px" }}>
            <div
              className="flex  mt-4 w-full max-w-xs"
              style={{ marginRight: "60px" }}
            >
              <input
                type="text"
                placeholder="Company Name"
                className="input input-bordered input-accent w-full"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="flex  mt-4 w-full max-w-xs">
              <input
                type="text"
                placeholder="Job Title"
                className="input input-bordered input-accent w-full"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </div>
          </div>

          <textarea
            placeholder="Write qualifications and job description"
            class="textarea textarea-bordered"
            rows={6}
            cols={80}
            style={{ marginBottom: "20px" }}
            value={desc}
            onChange={(e) => setDesc(e.target.value)}
          ></textarea>
          <div className="flex flex=col" style={{ marginBottom: "20px" }}>
            <div class="text-2xl" style={{ marginRight: "20px" }}>
              CV
            </div>
            <input
              type="file"
              class="file-input file-input-bordered file-input-success w-full max-w-xs"
            />
          </div>

          <div class="dropdown dropdown-right" style={{ marginBottom: "20px" }}>
            <label tabindex="0" class="btn m-1">
              {jobTime}
            </label>
            <ul
              tabindex="0"
              class="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <a onClick={() => handleJobTime("Part Time")}>Part Time</a>
              </li>
              <li>
                <a onClick={() => handleJobTime("Full Time")}>Full Time</a>
              </li>
            </ul>
          </div>

          <div className="mt-4 w-full max-w-xs">
            <input
              type="text"
              placeholder=" Enter Salary, Eg:- $1000/yr"
              className="input input-bordered input-accent w-full"
              value={salary}
              onChange={(e) => setSalary(e.target.value)}
            />
          </div>

          <div className="mt-4 w-full max-w-xs">
            <input
              type="text"
              placeholder=" Enter job work location"
              className="input input-bordered input-accent w-full"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
            />
          </div>
        </div>
        <button
          style={{ marginTop: "30px" }}
          class="btn btn-primary h-10 w-60 rounded-full btn-xs sm:btn-sm md:btn-md lg:btn-lg"
          onClick={handleAddJob}
        >
          Add Job
        </button>
      </div>

      <Footer />
    </div>
  );
}
