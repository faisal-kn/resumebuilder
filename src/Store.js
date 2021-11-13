import { createContext, useState } from "react";

export const AppContext = createContext(null);

export const Provider = (props) => {

    const initialState = {
        profile : {
            fullName : "",
            email : "",
            phone : "",
            location : "",
            portfolioLink : ""
        },
        education : {
            sectionHeading : "Education",
            schools : [
                {
                    id : Math.floor( Math.random() * 10000),
                    schoolName : "",
                    schoolLocation : "",
                    degree : "",
                    major : "",
                    gpa : 0.0,
                    startDate : "",
                    endDate : ""
                }
            ]
        },
        work : {
            sectionHeading : "Work",
            works : [
                {
                    companyName : "",
                    jobTitle : "",
                    jobLocation : "",
                    startDate : "",
                    endDate : "",
                    jobResponsibilities : []
                }
            ]
        },
        skills : {
            sectionHeading : "Skills",
            skills : [
                
            ]
        },
        projects : {
            sectionHeading : "Projects",
            projects : []
        },
        awards : {
            sectionHeading : "Awards",
            awards : []
        }
    };

    const [resumeState, setResumeState] = useState(initialState);

    return <AppContext.Provider value={{resumeState, setResumeState}} >{props.children}</AppContext.Provider>

}