import { useReducer, useContext } from 'react';
import { useForm } from './../customHooks';
import { AppContext } from './../Store';


const reducer = (state, action) => {
    switch (action.type) {
        case "CHANGESECTIONHEADING":
            return {...state, sectionHeading : action.payload.value}
        case "ADD":
            return {...state, schools : [...state.schools, {
                id : Math.round(Math.random() * 1000000),
                schoolName : "",
                schoolLocation : "",
                degree : "",
                major : "",
                gpa : 0.0,
                startDate : "",
                endDate : ""
            }]}
        case "DELETE":
            return {...state, schools : state.schools.filter(school => school.id !== action.payload.id)}
        case "UPDATE":
            return {...state, schools : state.schools.map(school => school.id === action.payload.id ? { ...school, ...action.payload.value }  : school ) }
        default: console.log("Default");
                    return state;
    }
}

const EducationForm = () => {

    const { resumeState } = useContext(AppContext);

    const initialState = { ...resumeState.education };

    const [ state, dispatch ] = useReducer(reducer, initialState);

    const handleInput = (e, id) => {

        e.preventDefault();

        dispatch( { type : "UPDATE", payload : { id : id, value : {[e.target.name] : e.target.value}} });

    }

    return (<div>
        <h4>Education Form</h4>
        <input type="text" value={state.sectionHeading} onChange={(e) => dispatch({ type: "CHANGESECTIONHEADING", payload : {value : e.target.value} })} />
        <div>
            {state.schools.map(school => (<div key={school.id}>
    
                <div>
                    <hr />
                    <input type="text" name="schoolName" placeholder="School Name" value={school.schoolName} onChange={(e) => handleInput(e, school.id)} />
                    <input type="text" name="schoolLocation" placeholder="School Location" value={school.schoolLocation} onChange={(e) => handleInput(e, school.id)}  />
                    <input type="text" name="degree" value={school.degree} placeholder="Degree"  onChange={(e) => handleInput( e, school.id ) } />
                    <input type="text" name="major" value={school.major} placeholder="Major" onChange={(e) => handleInput( e, school.id ) } />
                    <input type="text" name="gpa" value={school.gpa} placeholder="GPA" onChange={(e) => handleInput( e, school.id ) } />
                    <input type="text" name="startDate" value={school.startDate} placeholder="Start Date" onChange={ (e) => handleInput( e, school.id ) } />
                    <input type="text" name="endDate" value={school.endDate} placeholder="End Date" onChange={ (e) => handleInput( e , school.id ) } />
                    <hr />
                </div>

                <button onClick={() => dispatch({ type: "DELETE", payload: { id: school.id } })} >Remove</button>
          
            </div>))}
        
        </div>
        <button onClick={() => dispatch({ type: "ADD" })} >Add School</button>
    </div>);
}

export default EducationForm;

// const SchoolForm = ({schoolData}) => {

//     const [formState, setFormState] = useForm(schoolData);

//     return (<div>
//         <hr />
//         <input type="text" name="schoolName" placeholder="School Name" value={formState.schoolName} />
//         <input type="text" name="schoolLocation" value={formState.schoolLocation} />
//         <input type="text" name="degree" value={formState.degree} />
//         <input type="text" name="major" value={formState.major} />
//         <input type="text" name="gpa" value={formState.gpa} />
//         <input type="text" name="startDate" value={formState.startDate} />
//         <input type="text" name="endDate" value={formState.endDate} />
//         <hr />
//     </div>);


// }