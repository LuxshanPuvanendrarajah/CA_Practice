import React, { createContext, useContext, useEffect, useReducer } from 'react';

const coursesUrl = `http://localhost:4000/courses`;

const CoursesContext = createContext();

const coursesReducer = (state, action) => {

    switch (action.type) {
        case `getCourses`:
            return { ...state, courses: action.payload };
        case `addCourse`:
            // Set new state for this action using action.payload
            break;
        default:
            throw new Error(`Unhandled action type: ${action.type}`);
    }
}

const getCourses = async () => {
    let response;
    let payload;

    try {
        response = await fetch(coursesUrl);

        if (response.status === 200) {
            payload = await response.json();
        }
        else {
            payload = [{ status: response.status, message: response.message }];
        }
    } catch (error) {
        payload = [{ status: 503, message: `The data service is not available` }];
    }
    return payload;
};

const CoursesProvider = ({ children }) => {
    const [state, dispatch] = useReducer(coursesReducer, { courses: [] });

    useEffect(() => {
        const getCoursesData = async () => {
            const payload = await getCourses();
            dispatch({ type: `getCourses`, payload });
        }
        setTimeout(() => {
            getCoursesData();
        }, 3000);
    }, []);

    return (
        <CoursesContext.Provider value={state}>
            {children}
        </CoursesContext.Provider>
    );
};

export function useCoursesContext() {
    const context = useContext(CoursesContext);

    if (context === undefined) {
        throw new Error(`useCoursesContext must be used inside a CoursesProvider`);
    }

    return context;
}

export default CoursesProvider;