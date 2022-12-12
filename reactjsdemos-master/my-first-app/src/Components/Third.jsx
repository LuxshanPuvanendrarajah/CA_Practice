import React from 'react';

const Third = () => {
    // const date = new Date().toLocaleDateString();

    // return (
    //     <div>
    //         <p>This component was created on: {date}</p>
    //     </div>
    // );

    const title = `My React App`;
    const el = <h1>Welcome to {title}</h1>;
    return (<>{el}</>);
}

export default Third;
