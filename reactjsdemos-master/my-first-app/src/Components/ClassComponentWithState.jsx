import React, { Component } from 'react';
import CountUser from './CountUser';

class ClassComponentWithState extends Component {

    constructor(props) {
        super(props);

        this.state = {
            count: 5
        }

        this.clickHandler = this.clickHandler.bind(this);
    }

    clickHandler() {
        this.setState({ count: this.state.count + 1 })
    }

    render() {
        return (
            <>
                <p>
                    The current value of count state is:&nbsp;
                    {this.state.count}
                </p>
                <button onClick={this.clickHandler}>
                    Add 1 to count
                </button>
                <hr />
                <CountUser countProp={this.state.count} />
            </>
        );
    }
}

export default ClassComponentWithState;
