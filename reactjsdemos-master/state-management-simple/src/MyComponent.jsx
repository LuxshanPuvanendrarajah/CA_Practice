import React from 'react';
import { useDataContext } from './StateManagement/DataProvider';

const MyComponent = () => {

    const data = useDataContext();

    const showData = () => {
        console.log(data);
        return data ? true : false
    }

    return (
        <div>
            {showData() && <p>Was there some data there?</p>}
        </div>
    );
};

export default MyComponent;
