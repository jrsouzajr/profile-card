import { useState } from "react";

import type { Profile, ProfileCardProps } from "./profile-card.types";
import FollowButton from "../follow-button/follow-button";
import FollowersCounter from "../followers-counter/followers-counter";
import LikeButton from "../like-button/like-button";
import ModalEditProfile from "../modal-edit-profile/modal-edit-profile";

import "./profile-card.css";
import LocationIcon from "../../assets/location.svg";

const ProfileCard = ({
  imgLink,
  name,
  jobTitle,
  place,
  skills,
  isFollowing = false,
  followers,
  isLiked = false,
  likedCounter = 0,
  isOwner = false,
}: ProfileCardProps) => {
  const [following, setFollowing] = useState(isFollowing);
  const [followersCounter, setFollowersCounter] = useState(followers);
  const [liked, setLiked] = useState(isLiked);
  const [likedCounterHandler, setLikedCounter] = useState(likedCounter);

  const [isModalOpen, setIsModalOpen] = useState(false);

  const [profileInformation, setProfileInformation] = useState({
    imgLink,
    name,
    jobTitle,
    place,
    skills
  });

  const handleClick = () => {
    setFollowing((previousState) => !previousState);

    setFollowersCounter((followers) => {
      return following ? followers - 1 : followers + 1;
    });
  };

  const handleLike = () => {
    setLiked((prevLikedStatus) => !prevLikedStatus);
    setLikedCounter((prevLikesCounter) =>
      liked ? prevLikesCounter - 1 : prevLikesCounter + 1,
    );
  };

const handleEditModal = (profile: Profile) => {
  setIsModalOpen(!isModalOpen)
  setProfileInformation(profile)
}

  return (
    <div className="profileCardMain">
      <div className="profileCardAnimation">
        <div className="profileCard">
          <div className="profileImageDiv">
            <img className="profileImage" src={profileInformation.imgLink} alt={profileInformation.name} />
          </div>
          <div className="profileCardInformation">
            <p className="name">{profileInformation.name}</p>
            <p className="jobInfo">{profileInformation.jobTitle}</p>
            <p className="place">
              <img className="location-icon" src={LocationIcon} />
              {profileInformation.place}
            </p>
            <p className="skills">{profileInformation.skills.join(" • ")}</p>
            <FollowersCounter followersNumber={followersCounter} />
            {!isOwner ? (
              <div className="divButton">
                <FollowButton
                  onFollowClick={handleClick}
                  following={following}
                />
                <LikeButton
                  handleLike={handleLike}
                  isLiked={liked}
                  likeCounter={likedCounterHandler}
                />
              </div>
            ) : (
              <div className="divButton">
                <button onClick={() => setIsModalOpen(true)}>
                  Edit Profile
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
      {isModalOpen ? <div className="backgroundModal"><ModalEditProfile profile={profileInformation} handleEditModal={handleEditModal}/></div> : ""}
    </div>
  );
};

export default ProfileCard;
