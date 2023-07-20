import "@fortawesome/fontawesome-free/css/all.css";
import "@fortawesome/fontawesome-free/js/all.js";
import { React, useState } from "react";
import "../styles/application.css";
import "../tailwind.css";
import Footer from "./Footer";
import Navbar from "./Navbar";

const ApplicationPage = () => {
  const [activeTab, setActiveTab] = useState("applied");

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };
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

      <Footer />
    </div>
  );
};

export default ApplicationPage;
