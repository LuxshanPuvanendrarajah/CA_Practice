import React, { createContext, useContext } from 'react';

import courses from '../data.json';

const CoursesContext = createContext();

const CoursesProvider = ({ children }) => {
    return (
        <CoursesContext.Provider value={courses}>
            {children}
        </CoursesContext.Provider>
    );
};

const coursesReducer = (state, action) => {
    switch (action.type) {
        case `getCourses`:
            // Set new state for this action using action.payload
            break;
        case `addCourse`:
            // Set new state for this action using action.payload
            break;
        default:
            throw new Error(`Unhandled action type: ${action.type}`);
    }
}

export function useCoursesContext() {
    const context = useContext(CoursesContext);

    if (context === undefined) {
        throw new Error(`useCoursesContext must be used inside a CoursesProvider`);
    }

    return context;
}

export default CoursesProvider;