import { useState } from "react"
import type { ModalEditProfileInterface } from "./modal-edit-profile.type"
import './modal-edit-profile.css'

const ModalEditProfile = ({profile, handleEditModal}: ModalEditProfileInterface) => {

const [profileInformation, setProfileInformation] = useState(profile)

    return (
        <div className="modal-edit-profile">
            Edit Profile
            <hr/>
            <img className="profileImage" src={profile.imgLink} alt={profile.name}/>
            Name
            <input type="text" value={profileInformation.name} onChange={(e) => setProfileInformation({...profileInformation, name: e.target.value})} placeholder="Name"/>
            Job Description
            <input type="text" value={profileInformation.jobTitle} onChange={(e) => setProfileInformation({...profileInformation, jobTitle: e.target.value})} placeholder="Job Title"/>
            Location
            <input type="text" value={profileInformation.place} onChange={(e) => setProfileInformation({...profileInformation, place: e.target.value})} placeholder="Location"/>
            Skills
            <div className="">{profileInformation.skills}</div>

            <button className="" onClick={() => handleEditModal(profileInformation)}>Save</button>
        </div>
    )
}

export default ModalEditProfile