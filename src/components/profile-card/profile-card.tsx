import "./profile-card.css";
import type { ProfileCardProps } from "./profile-card.types";

const ProfileCard = ({
  imgLink,
  name,
  jobTitle,
  place,
  skills,
}: ProfileCardProps) => {
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
            <p className="place"><img className="location-icon" src="/src/assets/location.svg"/>{place}</p>
            <p className="skills">{skills.join(" • ")}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
