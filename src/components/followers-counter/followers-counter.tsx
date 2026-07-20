import type { FollowersCounterInterface } from "./followers-counter.type"
import './followers-counter.css'

const FollowersCounter = ({followersNumber}: FollowersCounterInterface) => {

    return (
        <div className="followers-component">
            Followers: {followersNumber}
        </div>
    )
}

export default FollowersCounter