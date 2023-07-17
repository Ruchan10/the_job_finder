import '@fortawesome/fontawesome-free/css/all.css';
import '@fortawesome/fontawesome-free/js/all.js';
import { React, useState } from 'react';
import { BsFilter, BsSearch } from "react-icons/bs";
import '../styles/home_page.css';
import '../tailwind.css';
import Footer from './Footer';
import Navbar from './Navbar';
import getCard from './card';

const HomePage = () => {
    const [isExpanded, setIsExpanded] = useState(false);

    const handleClick = () => {
      setIsExpanded(!isExpanded);
    };
    return (
      <div>
<Navbar/>
<div class="spacer">

</div>
<div class="main-body">
<div className={`flexible-button ${isExpanded ? 'expanded' : ''}`}>
      <button class="btn btn-outline filter-btn" onClick={handleClick}>
  <BsFilter/>
  Filter
</button>
      {isExpanded && (
        <div class="btn-group btn-group-vertical lg:btn-group-horizontal filter-group-btn">
    <input type="text" placeholder="Company Name" class="input filter-group-btn" />
    <input type="text" placeholder="Job Title" class="input filter-group-btn" />
    <input type="text" placeholder="Location" class="input filter-group-btn" />
  <div class="input-group filter-group-btn">
    <select class="select">
      <option disabled selected>Pick category</option>
      <option>Part Time</option>
      <option>Full Time</option>
    </select>
  </div>
<button class="btn btn-square filter-search-btn">
  <BsSearch style={{ fontSize: '24px', background: 'none', border: 'none'}}/>
</button>
      </div>
      )}
    </div>

<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 mt-8 card-container">
{getCard({
          logo: 'path_to_logo_image',
          companyName: 'test0',
          jobName: 'test0',
          location: 'test0',
          time: 'test0',
        })}
          {getCard({
          logo: 'path_to_logo_image',
          companyName: 'RK',
          jobName: 'Job Title',
          location: 'New York',
          time: 'Part Time',
        })}
    </div>
</div>
<Footer/>


      </div>
    );
  };
  
  export default HomePage;