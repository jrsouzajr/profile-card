import Heart from "../heart/heart"
import type { LikeButtonInterface } from "./like-button.type"
import './like-button.css'

const LikeButton = ({handleLike, isLiked, likeCounter}: LikeButtonInterface) => {
    return(
        <button className={`like-button ${isLiked ? 'liked' : 'notLiked'}`} onClick={handleLike}>
            <Heart/> <span className="text-like">Like ({likeCounter})</span>
        </button>
    )
}

export default LikeButton