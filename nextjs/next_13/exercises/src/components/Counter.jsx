import React, { Component } from "react";

class Counter extends Component {
    constructor(props) {
        super(props);

        this.state = {
            number: this.props.initialValue ?? 0,
            step: this.props.step ?? 1
        };

        this.inc = this.inc.bind(this);
        this.dec = this.dec.bind(this);
    }

    inc() {
        this.setState({
            number: this.state.number + this.state.step
        });
    }

    dec() {
        this.setState({
            number: this.state.number - this.state.step
        });
    }

    renderForm() {
        return (
            <>
                <input type="number" min={1} max={1000} value={this.state.step} onChange={ev => this.setState({ step: +ev.target.value })} />
                <button onClick={this.inc}>+</button>
                <button onClick={this.dec}>-</button>
            </>
        )
    }

    render() {
        return (
            <div>
                <h1>Counter (using class)</h1>
                <h2>{this.state.number}</h2>
                {this.renderForm()}
            </div>
        );
    }
}

export default Counter;
