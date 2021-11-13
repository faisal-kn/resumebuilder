import { useState } from "react";

export const useForm = (initialState) => {

    const [formState, setFormState] = useState(initialState);

    const setFormStateFromEventValues = (e) => setFormState(state => ({...state,  [e.target.name] : e.target.value}))

    return [formState, setFormStateFromEventValues];

}
