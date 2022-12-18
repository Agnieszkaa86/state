import { Component } from 'react';
import PropTypes from "prop-types";
import Button from './Button';

class Counter extends Component {
    constructor(props) {
        super(props);
        this.state = {
           counterValue: props.initialValue,
       }
    }

    static defaultProps = {
        step: 1,
        initialValue: 0,
    };
    static propTypes = {
        step: PropTypes.number,
        initialValue: PropTypes.number,
    }

    handleDecrement = () => {
        console.log("Decrement [-]")
        this.setState((prevState) => {
            return {
                counterValue: prevState.counterValue - this.props.step,
            }
        })
    }
    handleIncrement = () => {
        console.log("Increment [+]")
        this.setState((prevState) => {
            console.log("prevState: ", prevState)
            return {
                counterValue: prevState.counterValue + this.props.step,
            }
        })
    }
    goJohny = () => {
        console.log("go johny, go!!!")
    }
    render() {
        return (
            <div>
                <h2>Counter: {this.state.counterValue}</h2>
                <button onClick={this.handleDecrement}>-</button>
                <button onClick={this.handleIncrement}>+</button>
                <Button label="GO!" onClickAction={this.goJohny} />
              
            </div>
        );
    }
}

export default Counter;