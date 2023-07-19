import "@fortawesome/fontawesome-free/css/all.css";
import "@fortawesome/fontawesome-free/js/all.js";
import axios from "axios";
import { React, useState } from "react";
import { BsFilter, BsSearch } from "react-icons/bs";
import "../styles/home_page.css";
import "../tailwind.css";
import Footer from "./Footer";
import {GetAllJobs, GetBookmarked} from "./GetAllJobs";
import Navbar from "./Navbar";

const HomePage = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [jobs, setJobs] = useState([]);

  const handleClick = () => {
    setIsExpanded(!isExpanded);
  };

  const fetchJobs = async () => {
    try {
      const response = await axios.get("/jobs");
      if (response.data.success) {
        setJobs(response.data.data);
      } else {
        console.error(response.data.message);
      }
    } catch (error) {
      console.error(error);
    }
  };

  fetchJobs();

  return (
    <div>
      <Navbar />
      <div class="spacer"></div>
      <div class="main-body">
        <div className={`flexible-button ${isExpanded ? "expanded" : ""}`}>
          <button class="btn btn-outline filter-btn" onClick={handleClick}>
            <BsFilter />
            Filter
          </button>
          {isExpanded && (
            <div class="btn-group btn-group-vertical lg:btn-group-horizontal filter-group-btn">
              <input
                type="text"
                placeholder="Company Name"
                class="input filter-group-btn"
              />
              <input
                type="text"
                placeholder="Job Title"
                class="input filter-group-btn"
              />
              <input
                type="text"
                placeholder="Location"
                class="input filter-group-btn"
              />
              <div class="input-group filter-group-btn">
                <select class="select">
                  <option disabled selected>
                    Pick category
                  </option>
                  <option>Part Time</option>
                  <option>Full Time</option>
                </select>
              </div>
              <button class="btn btn-square filter-search-btn">
                <BsSearch
                  style={{
                    fontSize: "24px",
                    background: "none",
                    border: "none",
                  }}
                />
              </button>
            </div>
          )}
        </div>

        <GetAllJobs jobsData={jobs} />
      </div>
      <Footer />
    </div>
  );
};

export default HomePage;
