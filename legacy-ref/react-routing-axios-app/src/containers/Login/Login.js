import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

import './Login.css'
class Login extends Component {
    constructor(props) {
        super(props)
        console.log("**** constructor *****")
    }

    state = {
        userName: "",
        password: ""
    }

    handleSubmit=(event)=> {
        
        event.preventDefault();
        console.log("***********8", this.state.userName)
        console.log("***********8", this.state.password)


    }
    onUsernameHandle = (event) => {
        console.log("####", event.target.value)
        this.setState({ userName: event.target.value });
    }
    onPassHandle = (event) => {
        this.setState({
            password: event.target.value
        })
    }

    render() {


        return (

            <form onSubmit={this.handleSubmit}>
                <div className="container">
                    <h1>Signin</h1>
                    <p>Please fill in this form to signin.</p>
                    <hr></hr>
                    <label for="email"><b>UserName</b></label>
                    <input type="text" placeholder="userName" name="userName" required onChange={this.onUsernameHandle}></input>

                    <label for="psw"><b>Password</b></label>
                    <input type="password" placeholder="Enter Password" name="pass" required onChange={this.onPassHandle} />
                    <div>
                        {/* <a  class="a" [routerLink]="['/signup']" >Signup</a> */}
                        <NavLink
                            to="/signup"
                            className="a">signup</NavLink>
                    </div>
                    <div class="clearfix">
                        <button type="button" class="cancelbtn">Cancel</button>
                        <button type="submit" class="signupbtn">Signin</button>
                    </div>
                </div>

            </form>


        )
    }
}
export default Login