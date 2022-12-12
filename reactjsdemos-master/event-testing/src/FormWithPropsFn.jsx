import React, { useState } from 'react';

const FormWithPropsFn = ({ submit }) => {
    const [name, setName] = useState(``);

    const handleSubmit = event => {
        event.preventDefault();
        submit({ name });
    }

    return (
        <form onSubmit={event => handleSubmit(event)}>
            <label htmlFor="name">What is your name:&nbsp;</label>
            <input type="text" name="name" value={name} onChange={event => setName(event.target.value)} />
            <input type="submit" value="Submit" />
        </form>
    );
}

export default FormWithPropsFn;