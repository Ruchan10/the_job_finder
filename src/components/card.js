import { ClockCircleOutlined, EnvironmentOutlined } from "@ant-design/icons";
import { Card } from "antd";
import { AiOutlineDelete } from "react-icons/ai";
import { BsBookmark, BsBookmarkFill } from "react-icons/bs";
import "../styles/card.css";

export const getCard = ({
  logo,
  companyName,
  jobName,
  location,
  time,
  onUnbookmark,
  addBookmark,
  bookmarked,
  applied,
  apply,
  withdraw,
}) => {
  return (
    <div class="spacer">
      <Card className="custom-card">
        <div className="card-header">
          <img src={logo} alt="Logo" className="logo" />
          <div class="text-xl font">{companyName}</div>
          <span
            className="bookmark-icon"
            onClick={bookmarked ? onUnbookmark : addBookmark}
          >
            {bookmarked ? <BsBookmarkFill /> : <BsBookmark />}
          </span>
        </div>
        <div className="card-body">
          <div class="text-lg font">{jobName}</div>
          <div className="location">
            <span className="location-icon">
              <EnvironmentOutlined />
            </span>
            <div class="text-sm font-bold">{location}</div>
          </div>
          <div className="time">
            <span className="clock-icon">
              <ClockCircleOutlined />
            </span>
            <div class="text-sm font-bold">{time}</div>
          </div>
        </div>
        <button
          onClick={applied ? withdraw : apply}
          class="btn btn-sm card-footer"
        >
          {applied ? "Withdraw" : "Apply"}
        </button>
      </Card>
    </div>
  );
};
export const getCreatedCard = ({
  logo,
  companyName,
  jobName,
  location,
  time,
  deleteJob,
  view,
}) => {
  return (
    <div className="spacer">
      <Card className="custom-card">
        <div className="card-header">
          <img src={logo} alt="Logo" className="logo" />
          <div className="text-xl font">{companyName}</div>
        </div>
        <div className="card-body">
          <div className="text-lg font">{jobName}</div>
          <div className="location">
            <span className="location-icon">
              <EnvironmentOutlined />
            </span>
            <div className="text-sm font-bold">{location}</div>
          </div>
          <div className="time">
            <span className="clock-icon">
              <ClockCircleOutlined />
            </span>
            <div className="text-sm font-bold">{time}</div>
          </div>
        </div>
        <div className="card-footer">
          <div style={{ marginRight: "10px" }}>
            <button class="btn btn-sm" onClick={deleteJob}>
              <AiOutlineDelete />
            </button>
          </div>
          <button onClick={view} className="btn btn-sm">
            View
          </button>
        </div>
      </Card>
    </div>
  );
};
