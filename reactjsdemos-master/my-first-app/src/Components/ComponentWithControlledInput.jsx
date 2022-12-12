import React, { useState } from 'react';

const ComponentWithControlledInput = () => {

    const [username, setUsername] = useState(`someName`);

    return (
        <form>
            <label htmlFor="username">Username:&nbsp;</label>
            <input
                type="text"
                name="username"
                value={username}
                onChange={event => setUsername(event.target.value)}
            />
        </form>
    );
};

export default ComponentWithControlledInput;