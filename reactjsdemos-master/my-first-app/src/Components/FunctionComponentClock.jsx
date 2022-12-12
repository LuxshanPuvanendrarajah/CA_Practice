import React, { useState, useEffect } from 'react';

const FunctionComponentClock = () => {

    const [time, setTime] = useState(new Date().toLocaleTimeString());

    const tick = () => setTime(new Date().toLocaleTimeString());

    useEffect(() => {
        // Replaces componentDidMount and componentDidUpdate
        const ticktock = setInterval(() => {
            tick();
        }, 1000);
        // Replaces componentWillUnmount
        return () => clearInterval(ticktock);
    });

    return (
        <div className="flex-clock" id="functionClock">
            <h1>Clock made using a Function Component</h1>
            <h2>The time is {time}</h2>
        </div>
    );
};

export default FunctionComponentClock;
