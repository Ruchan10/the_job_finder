import "@fortawesome/fontawesome-free/css/all.css";
import "@fortawesome/fontawesome-free/js/all.js";
import axios from "axios";
import { React, useEffect, useState } from "react";
import { BsFilter, BsSearch } from "react-icons/bs";
import "../styles/home_page.css";
import "../tailwind.css";
import Footer from "./Footer";
import { GetAllJobs } from "./GetAllJobs";
import Navbar from "./Navbar";

const HomePage = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [jobs, setJobs] = useState([]);
  const [companyName, setCompanyName] = useState("");
  const [jobTitle, setJobTitle] = useState("");
  const [filterLocation, setFilterLocation] = useState("");
  const [jobTime, setJobTime] = useState("Job Time");
  const handleClick = () => {
    setIsExpanded(!isExpanded);
  };
  const handleJobTime = (option) => {
    setJobTime(option);
  };
  const fetchJobs = async () => {
    console.log("fetchJobs");
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
  const getFilters = async () => {
    console.log("INside getFilters");
    try {
      const queryString = new URLSearchParams({
        companyName: companyName,
        jobTitle: jobTitle,
        location: filterLocation,
        jobTime: jobTime,
      }).toString();
      const response = await axios.get(`/search/filters/${queryString}`);
      if (response.status === 200) {
        console.log(response.data);
        setJobs(response.data.data);
      } else {
        console.error(response.data.message);
      }
    } catch (e) {
      console.error(e);
    }
  };
  useEffect(() => {
    fetchJobs();
  }, []);
  const handleSearch = (searchResults) => {
    setJobs(searchResults);
  };
  return (
    <div>
      <Navbar onSearch={handleSearch} />

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
                value={companyName}
                onChange={(e) => setCompanyName(e.target.value)}
              />
              <input
                type="text"
                placeholder="Job Title"
                class="input filter-group-btn"
                value={jobTitle}
                onChange={(e) => setJobTitle(e.target.value)}
              />
              <input
                type="text"
                placeholder="Location"
                class="input filter-group-btn"
                value={filterLocation}
                onChange={(e) => setFilterLocation(e.target.value)}
              />
              <div class="input-group filter-group-btn">
                <select class="select">
                  <option disabled selected>
                    Pick category
                  </option>
                  <option onClick={() => handleJobTime("Part Time")}>
                    Part Time
                  </option>
                  <option onClick={() => handleJobTime("Part Time")}>
                    Full Time
                  </option>
                </select>
              </div>
              <button
                class="btn btn-square filter-search-btn"
                onClick={getFilters}
              >
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

        <GetAllJobs jobsData={jobs} getJobs={fetchJobs} />
      </div>
      <Footer />
    </div>
  );
};

export default HomePage;
