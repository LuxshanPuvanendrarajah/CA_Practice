import React, { createContext } from 'react';

import courses from '../data.json';

const CoursesContext = createContext();

const CoursesProvider = ({ children }) => {
    return (
        <CoursesContext.Provider value={courses}>
            {children}
        </CoursesContext.Provider>
    );
};

export default CoursesProvider;