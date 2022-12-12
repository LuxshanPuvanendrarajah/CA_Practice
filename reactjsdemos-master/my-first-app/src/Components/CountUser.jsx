import React from 'react';

const CountUser = ({ countProp }) => {
    return (
        <>
            <h2>
                I get the value of the state count from my parent as a prop.
            </h2>
            <p>This value is: {countProp}</p>
        </>
    );
};

export default CountUser;
