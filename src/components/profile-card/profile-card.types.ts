export interface Profile {
    imgLink: string, 
    name: string, 
    jobTitle: string, 
    place: string, 
    skills: string[],
}

export interface ProfileCardProps extends Profile{
    isFollowing: boolean,
    followers: number,
    isLiked?: boolean,
    likedCounter?: number,
    isOwner?: boolean
}