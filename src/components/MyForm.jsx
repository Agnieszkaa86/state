import { Component } from "react";

const INITIAL_STATE = {
        firstName: "",
        lastName: "",
        email: "",
        accept: false
        
}

class MyForm extends Component {

    state = INITIAL_STATE;

    handleInputChange = (e) => {
        // const name = e.target.name;
        // const value = e.target.value;
        const { value, name, checked, type} = e.target;
        // console.log("handleInputChange >>>>:", { [name]: value });
        this.setState({
            [name]: type!== "checkbox" ? value : checked,
        });
    };
   
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.formSubmissionHandler(this.state)
    };
    resetForm = () => {
        this.setState(INITIAL_STATE)
    };
    
    // console.log("Submitting from...", e.target);
        // const formElement = e.currentTarget.elements;
        // const firstName = formElement.firstName.value;
        // const lastName = formElement.lastName.value;
        
        // const userData = {
        //     firstName,
        //     lastName
        // }
        // this.props.formSubmissionHandler(userData);
    
    render() {
        return(
            <>
                <h2>{this.props.label}</h2>
        <form onSubmit={this.handleSubmit}>
                    <input
                        type="text"
                        name="firstName"
                        placeholder="First Name"
                        value={this.state.firstName}
                        onChange={this.handleInputChange}
                    />
                    <input
                        type="text"
                        name="lastName"
                        placeholder="Last Name"
                        value={this.state.lastName}
                        onChange={this.handleInputChange}
                    />
                    <input
                        type="email"
                        name="email"
                        placeholder="email"
                        value={this.state.email}
                        onChange={this.handleInputChange}
                    />
                    <label>
                        <input
                            type="checkbox"
                            checked={this.state.accept}
                            name="accept"
                            onChange={this.handleInputChange}
                        />
                        <span>Accept T&C</span>
                    </label>
            <button type="submit">SUBMIT</button>
        </form>
        </>
       )
    }
}
export default MyForm;