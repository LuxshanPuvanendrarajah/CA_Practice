import React from 'react';

const ComponentWithUncontrolledInput = () => {
    return (
        <form>
            <label htmlFor="username">Username:&nbsp;</label>
            <input type="text" name="username" />
        </form>
    );
};

export default ComponentWithUncontrolledInput;
