import { Component } from "react";
const INITIAL_STATE = {
        firstName: "",
        lastName: "",
        email: "",
        acceptTC: false
    }

class MyForm extends Component {
    state = INITIAL_STATE;

    //handle submit
    handlerSubmit = (event) => {
        event.preventDefault();
        this.props.formSubmissionHandler(this.state);
        this.resetForm();
    };
        // console.log("SUBMITING FORM....", event.currentTarget.elements);
        // console.log("firstName: ", event.currentTarget.elements.firstName.value);
        // const formElement = event.currentTarget.elements;
        // const firstName = formElement.firstName.value;
        // const lastName = formElement.lastName.value;
        // console.log(">>>", {
        //     firstName,
        //     lastName,
        // });
        // const userData = {
        //     firstName,
        //     lastName
        // }
        
    
   //handle input
    handleInputChange = (e) => {
        // const value = e.target.value;
        // const name = e.target.name;
        const { name, value,checked, type} = e.target;

       // console.log("handleOnChange >>>>: ", { [name]: value });
        this.setState({
            [name]: type !== "checkbox" ? value : checked,
        })
    };
    //reset form
    resetForm = () => {
        this.setState(INITIAL_STATE)
    }
    render() {
        return(
            <>
                <h2>{this.props.label}:{this.state.firstName} {this.state.lastName}</h2>
            <form onSubmit={this.handlerSubmit}>
                <input type="text" name="firstName" placeholder="First name" value={this.state.firstName}onChange={this.handleInputChange} />
                <input type="text" name="lastName" placeholder="Last Name" value={this.state.lastName}onChange={this.handleInputChange} />
                    <input type="email" name="email" placeholder="email" value={this.state.email} onChange={this.handleInputChange} />
                    <label>
                        <input type='checkbox' checked={this.state.acceptTC} name='acceptTC' onChange={this.handleInputChange} />
                        <span>Accept T&C</span>
                    </label>
                <button type="submit">SUBMIT</button>
            </form>  
        </>
        )
    }
}
export default MyForm;