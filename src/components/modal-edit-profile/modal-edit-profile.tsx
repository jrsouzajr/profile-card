import { useState } from "react";
import type { ModalEditProfileInterface } from "./modal-edit-profile.type";

import {
  FieldGroup,
} from "@/components/ui/field";

import "./modal-edit-profile.css";
import { Button } from "../ui/button";
import TextInputField from "../text-input-field/text-input-field";

const ModalEditProfile = ({
  profile,
  handleEditModal,
  handleCancelEdition,
}: ModalEditProfileInterface) => {
  const [profileInformation, setProfileInformation] = useState(profile);

const handleEventChange = (event: React.ChangeEvent<HTMLInputElement>, textInputId: string) => {
  
  console.log(event.target);

  switch(textInputId) {
    case "name" :
    break;
    case "jobTitle":
    break;
    case "place":
    break;
 
  }
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



              <TextInputField textTitle="Name" id="name" handleEventChange={(e) => handleEventChange(e, "name")} inputValue={profileInformation.name} messageError="" placeholder="Name" isValidData={true}></TextInputField>

              {/* <Field className="gap-1">
                <FieldLabel htmlFor="name">Name</FieldLabel>
                <Input
                  id="name"
                  type="text"
                  value={profileInformation.name}
                  onChange={(e) =>
                    setProfileInformation({
                      ...profileInformation,
                      name: e.target.value,
                    })
                  }
                  placeholder="Name"
                />
              </Field> */}
              {/* <Field className="gap-1">
                <FieldLabel htmlFor="jobDescription">
                  Job Description
                </FieldLabel>
                <Input
                  id="jobDescription"
                  className="input-text-modal"
                  type="text"
                  value={profileInformation.jobTitle}
                  onChange={(e) =>
                    setProfileInformation({
                      ...profileInformation,
                      jobTitle: e.target.value,
                    })
                  }
                  placeholder="Job Title"
                />
              </Field>
              <Field className="gap-1">
                <FieldLabel htmlFor="place">Location</FieldLabel>
                <Input
                  id="place"
                  className="input-text-modal"
                  type="text"
                  value={profileInformation.place}
                  onChange={(e) =>
                    setProfileInformation({
                      ...profileInformation,
                      place: e.target.value,
                    })
                  }
                  placeholder="Location"
                />
              </Field> */}





            </FieldGroup>
          </form>
        </div>
      </div>
      <div className="div-modal-buttons">
        <hr />
        <div className="modal-buttons">
          <Button
            className=""
            onClick={() => handleEditModal(profileInformation)}
          >
            Save
          </Button>
          <Button
            className="modal-cancel"
            onClick={() => handleCancelEdition(profile)}
          >
            Cancel
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ModalEditProfile;
