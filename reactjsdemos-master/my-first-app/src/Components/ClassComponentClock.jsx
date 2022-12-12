import React, { Component } from 'react';

class ClassComponentClock extends Component {
    constructor(props) {
        super(props);
        this.state = {
            time: new Date().toLocaleTimeString()
        }
    }

    componentDidMount() {
        this.ticktock = setInterval(() => {
            this.tick();
        }, 1000);
    }

    componentWillUnmount() {
        clearInterval(this.ticktock);
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        // Not required in this application
    }

    tick() {
        this.setState({
            time: new Date().toLocaleTimeString(),
        });

    }

    render() {
        return (
            <div className="flex-clock" id="classClock">
                <h1>Clock made using a Class Component</h1>
                <h2>The time is {this.state.time}</h2>
            </div>
        );
    }
}

export default ClassComponentClock;