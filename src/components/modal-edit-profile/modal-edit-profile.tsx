import { useState } from "react";
import type { ModalEditProfileInterface } from "./modal-edit-profile.type";

import {
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field";

import "./modal-edit-profile.css";
import { Button } from "../ui/button";
import TextInputField from "../text-input-field/text-input-field";
import { IconX } from '@tabler/icons-react';
import { Input } from "../ui/input";

type ProfileField = "name" | "jobTitle" | "place";

const ModalEditProfile = ({
  profile,
  handleEditModal,
  handleCancelEdition,
}: ModalEditProfileInterface) => {

  const [profileInformation, setProfileInformation] = useState(profile);
  const [errors, setErrors] = useState({
  name: "",
  jobTitle: "",
  place: "",
});
const hasChanges = JSON.stringify(profile) !== JSON.stringify(profileInformation);

const handleEventChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  
  const value = event.target.value;
  const name = event.target.name as ProfileField
  
  setProfileInformation((prevProfileInformation) => ({
    ...prevProfileInformation,
    [name]: value
  }))
  
  setErrors((prevErrors) => ({
    ...prevErrors,
    [name]: validateField(name, value)
  }))
  
}

const validateField = (name: ProfileField, value: string) => {
  switch(name) {
  case "name":
    return value.trim() ? "" : "Name is required"
  case "jobTitle" :
    return value.trim().length >= 3 ? "" : "Job title must have at least 3 characters"
  case "place":
    return value.trim() ? "" : "Place is required"

  default: return ""
  }
}

const checkErrors = () => {
  return (
    errors.name === "" &&
    errors.jobTitle === "" &&
    errors.place === ""
  )
}

const removeSkill = (index: number) => {
  const skillsList = profileInformation.skills.filter((skill, skillIndex) => {
    return skillIndex !== index})

    setProfileInformation((prevInfo) => ({
      ...prevInfo,
      skills: skillsList
    }))
}


  return (
    <div className="modal-edit-profile">
      <p className="modal-title">Edit Profile</p>
      <hr />

      <div className="modal">
        <div className="modal-profile-image">
          <img
            className="profileImage"
            src={profile.imgLink}
            alt={profile.name}
          />
        </div>
        <div className="modal-info">
          <form>
            <FieldGroup>
              <TextInputField textTitle="Name" id="name" name="name" handleEventChange={handleEventChange} inputValue={profileInformation.name} messageError={errors.name} placeholder="Name" isInvalidData={!!errors.name.trim()}></TextInputField>
              <TextInputField textTitle="Job Title" id="jobTitle" name="jobTitle" handleEventChange={handleEventChange} inputValue={profileInformation.jobTitle} messageError={errors.jobTitle} placeholder="Job Title" isInvalidData={!!errors.jobTitle.trim()}></TextInputField>
              <TextInputField textTitle="Location" id="place" name="place" handleEventChange={handleEventChange} inputValue={profileInformation.place} messageError={errors.place} placeholder="Location" isInvalidData={!!errors.place.trim()}></TextInputField>
              {profileInformation.skills.map((skill, index) =>
                <div>{skill}
                <Button onClick={() => removeSkill(index)}><IconX/></Button>
                </div>
              )}
              <div className="add-skill">
                <FieldLabel htmlFor="skills">Skills</FieldLabel>
                <Input
                //TODO: Continue to add skills and removing skills
                  id="skills"
                  type="text"
                  placeholder="Add skill"
                />
              <Button className="rounded-full" onClick={() => {}}>Add skill</Button>
              </div>
            </FieldGroup>
          </form>
        </div>
      </div>
      <div className="div-modal-buttons">
        <hr />
        <div className="modal-buttons">
          <Button
            disabled={!checkErrors() || !hasChanges}
            className=""
            onClick={() => handleEditModal(profileInformation)}
          >
            Save
          </Button>
          <Button
            className="modal-cancel"
            onClick={handleCancelEdition}
          >
            Cancel
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ModalEditProfile;
