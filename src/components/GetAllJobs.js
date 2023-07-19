import "@fortawesome/fontawesome-free/css/all.css";
import "@fortawesome/fontawesome-free/js/all.js";
import "../styles/home_page.css";
import "../tailwind.css";
import getCard from "./card";

export const GetAllJobs = ({ jobsData }) => {
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
          })}
        </div>
      ))}
    </div>
  );
};


export const GetBookmarked = ({ bookmarkData }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 mt-8 card-container">
      {bookmarkData.map((job) => (
        <div>
          {getCard({
            logo: "path_to_logo_image",
            companyName: job.company,
            jobName: job.title,
            location: job.location,
            time: job.desc,
          })}
        </div>
      ))}
    </div>
  );
};

