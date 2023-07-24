import { Card } from "antd";
import { AiOutlineDelete } from "react-icons/ai";
import { BsApple, BsFacebook, BsGoogle } from "react-icons/bs";
import "../styles/card.css";
import "../styles/signup_page.css";

export function getIcons() {
  return (
    <div className="signup-social-logos">
      <BsGoogle style={{ fontSize: "30px", "padding-right": "10px" }} />
      <BsApple style={{ fontSize: "30px", "padding-right": "10px" }} />
      <BsFacebook style={{ fontSize: "30px", "padding-right": "10px" }} />
    </div>
  );
}

export function GetUserPill({
  logo,
  email,
  fullName,
  num,
  deleteJobApplication,
  cv,
  jobId,
  title,
}) {
  const handleDeleteClick = async () => {
    // Call the deleteJobApplication function with the jobId and userId as arguments
    deleteJobApplication(jobId);
  };
  return (
    <div className="spacer">
      <Card className="custom-card">
        <div className="card-header">
          <img src={logo} alt="Logo" className="logo" />
          <div className="text-xl font">{fullName}</div>
        </div>
        <div className="card-body">
          <div className="text-lg font">{title}</div>
          <div className="text-lg font">{email}</div>
          <div className="text-lg font">{num}</div>
        </div>
        <div className="card-footer">
          <div style={{ marginRight: "10px" }}>
            <button class="btn btn-sm" onClick={handleDeleteClick}>
              <AiOutlineDelete />
            </button>
          </div>
          <button onClick={cv} className="btn btn-sm">
            CV
          </button>
        </div>
      </Card>
    </div>
  );
}
