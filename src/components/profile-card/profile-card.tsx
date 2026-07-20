import "./profile-card.css";
import type { ProfileCardProps } from "./profile-card.types";
import LocationIcon from "../../assets/location.svg";
import FollowButton from "../follow-button/follow-button";
import { useState } from "react";
import FollowersCounter from "../followers-counter/followers-counter";

const ProfileCard = ({
  imgLink,
  name,
  jobTitle,
  place,
  skills,
  isFollowing = false,
  followers,
}: ProfileCardProps) => {
  const [following, setFollowing] = useState(isFollowing);
  const [followingCounter, setFollowingCounter] = useState(followers);

  const handleClick = () => {
    setFollowing((previousState) => !previousState);

    if (following) setFollowingCounter((prev) => prev - 1);
    else setFollowingCounter((prev) => prev + 1);
  };

  return (
    <div className="profileCardMain">
      <div className="profileCardAnimation">
        <div className="profileCard">
          <div className="profileImageDiv">
            <img className="profileImage" src={imgLink} alt={name} />
          </div>
          <div className="profileCardInformation">
            <p className="name">{name}</p>
            <p className="jobInfo">{jobTitle}</p>
            <p className="place">
              <img className="location-icon" src={LocationIcon} />
              {place}
            </p>
            <p className="skills">{skills.join(" • ")}</p>
            <FollowersCounter followersNumber={followingCounter}></FollowersCounter>
            <div className="divButton">
              <FollowButton
                onFollowClick={handleClick}
                following={following}
              ></FollowButton>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
