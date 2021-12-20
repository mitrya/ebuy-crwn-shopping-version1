import React from "react"
import "./sign-in.component.scss"
import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";
import {signInWithGoogle} from "../../firebase/firebase.utils";
class SignIn extends React.Component
{

    constructor(props)
    {
        super(props);
        this.state={
            email:'',
            password:''
        }
    }

    handleSubmit =event => {
        event.preventDefault();
        this.setState({email:'',password:''})
    }

    handleChange =event =>
    {  
        const {value,name} =event.target;
        this.setState({[name]:value})
    }


    render()
    {
        return(
           
           <div className="sign-in">
               
                <h2>I already have an account</h2>
                <span>Sign in with your email and password </span>
                
                <form onSubmit={this.handleSubmit}>
                    {/* <label>Email</label>                    */}
                    <FormInput    
                    name="email"
                    value={this.state.email} 
                    handleChange={this.handleChange} 
                    label='EMAIL'
                    required
                    />
                    {/* <label>Password</label> */}
                    <FormInput 
                    name='password'
                    type='password'
                    label='PASSWORD'
                    value={this.state.password}
                    handleChange={this.handleChange}
                    required
                    />
                    <div className="buttons">
                    <CustomButton type='submit' >Submit Form</CustomButton>
                    <CustomButton onClick={signInWithGoogle} isGoogleSignIn={true}>{' '}Sign in With Google{' '}</CustomButton>
                    </div>
                   

                </form>
            
            </div>
        )
    }

}

export default SignIn;