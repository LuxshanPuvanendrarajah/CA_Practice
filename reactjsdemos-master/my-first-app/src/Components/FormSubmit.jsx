import React, { useState } from 'react';

const FormSubmit = () => {

    const [username, setUsername] = useState(`someName`);

    const handleSubmit = event => {
        event.preventDefault();
        const dataToSend = JSON.stringify({ username });
        console.log(dataToSend);
    }

    return (
        <form onSubmit={event => handleSubmit(event)} >
            <label htmlFor="username">Username:&nbsp;</label>
            <input
                type="text"
                name="username"
                value={username}
                onChange={event => setUsername(event.target.value)}
            />
            <br />
            <input type="submit" value="Submit" />
        </form>
    );
};

export default FormSubmit;