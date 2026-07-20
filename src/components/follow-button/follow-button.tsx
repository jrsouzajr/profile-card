import './follow-button.css'
import type { FollowButtonInterface } from './follow-button.types';

const FollowButton = ({onFollowClick, following}: FollowButtonInterface) => {
  return (
    <button
      className={`btnFollow ${following ? "following" : "follow"}`}
      onClick={onFollowClick}
    >
      {following ? "Following" : "Follow"}
    </button>
  );
};

export default FollowButton;
