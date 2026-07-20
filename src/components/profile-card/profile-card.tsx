import { useState } from "react";
import "./profile-card.css";
import type { ProfileCardProps } from "./profile-card.types";

const ProfileCard = ({
  imgLink,
  name,
  jobTitle,
  place,
  skills,
  isFollowing = false,
}: ProfileCardProps) => {
  const [following, setFollow] = useState(isFollowing);

  const handleClick = () => {
    setFollow(!following);
  };

  return (
    <div className="profileCardMain">
      <div className="profileCardAnimation">
        <div className="profileCard">
          <div className="profileImageDiv">
            <img className="profileImage" src={imgLink} />
          </div>
          <div className="profileCardInformation">
            <p className="name">{name}</p>
            <p className="jobInfo">{jobTitle}</p>
            <p className="place">
              <img className="location-icon" src="/src/assets/location.svg" />
              {place}
            </p>
            <p className="skills">{skills.join(" • ")}</p>
            <div className="divButton">
              <button
                className={`btnFollow ${following ? "following" : "follow"}`}
                onClick={handleClick}
              >
                {following ? "Following" : "Follow"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
