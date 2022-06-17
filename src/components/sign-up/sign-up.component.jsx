import React from "react";
import { auth, createUserProfileDocument } from "../../firebase/firebase.utils";
import CustomButton from "../custom-button/custom-button.component";
import FormInput from "../form-input/form-input.component";

import "./sign-up.styles.scss"
class SignUp extends React.Component
{
 constructor() 
 {
     super();
     this.state = {
         displayName:'',
         email:'',
         password:'',
         confirmPassword:''
     }
 }   


handleSubmit = async event => {
    event.preventDefault();
    const {displayName,email,password,confirmPassword}=this.state;
    if(password !== confirmPassword)
    {
        alert("password don't match");
        return;
    }
    if(password.length < 6)
    {
        alert("Password should be at least 6 characters");
        return;
    }
    try {
        const{user} = await auth.createUserWithEmailAndPassword(email,password);

        await createUserProfileDocument(user,{displayName});

        this.setState({
            displayName:'',
            email:'',
            password:'',
            confirmPassword:''   
        })
    }
    catch(err)
    { 
        alert(err);
    }
}

handleChange =event =>
{  
    const {value,name} =event.target;
    this.setState({[name]:value});
}

render()
{
    const {displayName,email,password,confirmPassword} = this.state;
    return(
        <div className="sign-up">
            <h2 className="title">I do not have an account</h2>
            <span>Sign up with your eamil and password</span>
            <form className="sign-up-form" onSubmit={this.handleSubmit}>
                <FormInput
                    type="text"
                    name="displayName"
                    value={displayName}
                    onChange={this.handleChange} 
                    label="Display Name"
                    required
                />
                <FormInput
                    type="email"
                    name="email"
                    value={email}
                    onChange={this.handleChange} 
                    label="Email"
                    required
                />
                <FormInput
                    type="password"
                    name="password"
                    value={password}
                    onChange={this.handleChange} 
                    label="Password"
                    required
                    />
                <FormInput
                    type="password"
                    name="confirmPassword"
                    value={confirmPassword}
                    onChange={this.handleChange} 
                    label="Confirm Password"
                    required
                    />
                <CustomButton type='submit'>SIGN UP</CustomButton>
            </form>
        </div>
    )
}
}
export default SignUp;