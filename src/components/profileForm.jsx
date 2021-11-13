import { useContext } from "react";
import { AppContext } from "../Store";
import { useForm } from "../customHooks";

const ProfileForm = () => {

    const initialState = {
        fullName: "",
        email: "",
        phone: "",
        location: "",
        portfolioLink: "",
    }

    const [formState, setFormState] = useForm(initialState);

    const { setResumeState } = useContext(AppContext);

    const handleFormChange = (e) => {
        setFormState(e);
        setResumeState(state => ({ ...state, profile: formState }));
    }

    return (<div>
        ProfileForm
        <input type="text" value={formState.fullName} name="fullName" placeholder="Full Name" onChange={(e) => handleFormChange(e)} />
        <input type="email" name="email" value={formState.email} id="" placeholder="email" onChange={(e) => handleFormChange(e)} />
        <input type="text" name="phone" placeholder="phone" value={formState.phone} onChange={(e) => handleFormChange(e)} />
        <input type="text" placeholder="Location" name="location" value={formState.location} onChange={(e) => handleFormChange(e)} />
        <input type="text" placeholder="link" name="portfolioLink" value={formState.portfolioLink} onChange={(e) => handleFormChange(e)} />
    </div>);
}

export default ProfileForm;