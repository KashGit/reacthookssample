import React, { Component } from 'react'
//import PropTypes from 'prop-types'

export default class CounterClass extends Component {
    constructor() {
        super()

        this.state = {
            counter: 0
        }

        this.incrementCounter = this.incrementCounter.bind(this);
    }

    incrementCounter() {
        this.setState({ counter: ++this.state.counter })
    }

    render() {
        return (
            <div>
                <h1>Counter</h1>
                <h3>{this.state.counter}</h3>
                <p><button onClick={this.incrementCounter}>Increment Counter</button></p>
            </div>
        )
    }
}



