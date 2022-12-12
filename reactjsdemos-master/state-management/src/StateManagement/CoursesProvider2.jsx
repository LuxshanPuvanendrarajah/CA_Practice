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

export function useCoursesContext() {
    const context = useContext(CoursesContext);

    if (context === undefined) {
        throw new Error(`useCoursesContext must be used inside a CoursesProvider`);
    }

    return context;
}

export default CoursesProvider;