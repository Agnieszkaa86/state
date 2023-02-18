import { Component } from "react";
import PropTypes from "prop-types";
import Button from "./Button";

class Counter extends Component {
  constructor(props) {
    super(props);
    // console.log(props);
    // this.sayHello = this.sayHello.bind(this);
    this.state = {
      counterValue: props.initialValue,
    }
  }
  static defaultPropos = {
    step: 1,
    initialValue: 0,
  }
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
    console.log("what is this: ", this)
    // this.sayHello();
    this.setState((prevState) => {
      // zwracamy nowy stan
      return {
        counterValue: prevState.counterValue + this.props.step,
      }
    })
  }
  // sayHello(){
  //   console.log("Say HELLO!!!!")  
  //   // w tej metodzie nie ma this bezposrednio, ale moge ja wywołac w innej funkcji przez this, 
  //   // aby było dostepne trzeba zrovbic bind w construktorze) np. this.sayHello = this.sayHello.bind(this);
  // }
  goJohny = () => {
    console.log("Go Johny go!!!!");
  }

  render() {
    return (
      <div>
        <h2>Counter: {this.state.counterValue}</h2>
        <button onClick={()=>this.handleDecrement}>-</button>
        <button onClick={this.handleIncrement}>+</button>
        {/* <button onClick={this.sayHello}>SAY HELLO</button> */}
        <Button label="GO" onClickAction={this.goJohny}/>
      </div>
    )
  }
}
export default Counter;