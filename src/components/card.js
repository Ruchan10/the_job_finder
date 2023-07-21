import { ClockCircleOutlined, EnvironmentOutlined } from "@ant-design/icons";
import { Card } from "antd";
import { BsBookmark, BsBookmarkFill } from "react-icons/bs";
import "../styles/card.css";

const getCard = ({
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
        class="btn btn-sm card-footer">{applied ? "Withdraw" : "Apply"}</button>
      </Card>
    </div>
  );
};

export default getCard;
