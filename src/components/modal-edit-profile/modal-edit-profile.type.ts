import type { Profile } from "../profile-card/profile-card.types";

export interface ModalEditProfileInterface {
    profile: Profile
    handleEditModal: (profile: Profile) => void
    handleCancelEdition: () => void
}