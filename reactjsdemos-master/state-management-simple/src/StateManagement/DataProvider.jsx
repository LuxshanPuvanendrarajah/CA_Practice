import React, { createContext, useContext } from 'react';
import data from '../data.json';

const DataContext = createContext();

const DataProvider = ({ children }) => {
    return (
        <DataContext.Provider value={data}>
            {children}
        </DataContext.Provider>
    );
};

export function useDataContext() {
    const context = useContext(DataContext);

    return context;
}

export default DataProvider;
