import { useState } from "react";
import type { ModalEditProfileInterface } from "./modal-edit-profile.type";

import { FieldGroup, FieldLabel } from "@/components/ui/field";

import "./modal-edit-profile.css";
import { Button } from "../ui/button";
import TextInputField from "../text-input-field/text-input-field";
import { IconPlus, IconX } from "@tabler/icons-react";
import { Input } from "../ui/input";
import { ButtonGroup, ButtonGroupSeparator } from "../ui/button-group";
import type { Profile } from "../profile-card/profile-card.types";

type ProfileField = "name" | "jobTitle" | "place";

const ModalEditProfile = ({
  profile,
  handleEditModal,
  handleCancelEdition,
}: ModalEditProfileInterface) => {
    const normalizeProfileInformation = (profileInfo: Profile) => {
    return {
      ...profileInfo,
      name: profileInfo.name.trim(),
      jobTitle: profileInfo.jobTitle.trim(),
      place: profileInfo.place.trim(),
      skills: profileInfo.skills.map((skill) => skill.trim())
    }
  }
  const [profileInformation, setProfileInformation] = useState(profile);
  const [errors, setErrors] = useState({
    name: "",
    jobTitle: "",
    place: "",
  });
  const [inputSkill, setInputSkill] = useState("");
  const hasChanges =
    JSON.stringify(normalizeProfileInformation(profile)) !== JSON.stringify(normalizeProfileInformation(profileInformation));

  const handleEventChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    const name = event.target.name as ProfileField;

    setProfileInformation((prevProfileInformation) => ({
      ...prevProfileInformation,
      [name]: value,
    }));

    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: validateField(name, value),
    }));
  };

  const validateField = (name: ProfileField, value: string) => {
    switch (name) {
      case "name":
        return value.trim() ? "" : "Name is required";
      case "jobTitle":
        return value.trim().length >= 3
          ? ""
          : "Job title must have at least 3 characters";
      case "place":
        return value.trim() ? "" : "Place is required";

      default:
        return "";
    }
  };

  const checkErrors = () => {
    return errors.name === "" && errors.jobTitle === "" && errors.place === "";
  };

  const removeSkill = (index: number) => {
    const skillsList = profileInformation.skills.filter((skill, skillIndex) => {
      return skillIndex !== index;
    });

    setProfileInformation((prevInfo) => ({
      ...prevInfo,
      skills: skillsList,
    }));
  };

  const addNewSkill = () => {
    setProfileInformation((prevInfo) => ({
      ...prevInfo,
      skills: [...prevInfo.skills, inputSkill],
    }));
    setInputSkill("");
  };

  const skillHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputSkill(event.target.value);
  };
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
              <TextInputField
                textTitle="Name"
                id="name"
                name="name"
                handleEventChange={handleEventChange}
                inputValue={profileInformation.name}
                messageError={errors.name}
                placeholder="Name"
                isInvalidData={!!errors.name.trim()}
              ></TextInputField>
              <TextInputField
                textTitle="Job Title"
                id="jobTitle"
                name="jobTitle"
                handleEventChange={handleEventChange}
                inputValue={profileInformation.jobTitle}
                messageError={errors.jobTitle}
                placeholder="Job Title"
                isInvalidData={!!errors.jobTitle.trim()}
              ></TextInputField>
              <TextInputField
                textTitle="Location"
                id="place"
                name="place"
                handleEventChange={handleEventChange}
                inputValue={profileInformation.place}
                messageError={errors.place}
                placeholder="Location"
                isInvalidData={!!errors.place.trim()}
              ></TextInputField>
              <FieldLabel htmlFor="skills">Skills</FieldLabel>
              <div className="main-div-skill">
                {profileInformation.skills.map((skill, index) => (
                  <div className="skill-block">
                    <p className="skill-text">{skill}</p>
                    <Button size="icon-xs" onClick={() => removeSkill(index)}>
                      <IconX />
                    </Button>
                  </div>
                ))}
              </div>
              <div className="add-skill">
                <ButtonGroup className="full-width">
                  <Input
                    id="skills"
                    type="text"
                    placeholder="Add skill"
                    name="skills"
                    onChange={skillHandler}
                    value={inputSkill}
                  />
                  <ButtonGroupSeparator />
                  <Button
                    disabled={!inputSkill.trim()}
                    onClick={() => addNewSkill()}
                  >
                    <IconPlus />
                  </Button>
                </ButtonGroup>
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
          <Button className="modal-cancel" onClick={handleCancelEdition}>
            Cancel
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ModalEditProfile;
