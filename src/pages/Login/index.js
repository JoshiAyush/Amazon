import { useState } from "react";
import { Link, useHistory } from "react-router-dom";

import { LoginContainer } from "./style/Login";

function Login() {
    /**
     * @function Login() is the login component of our app  
     */

    /**
     * @function useHistory() hook gives you access to the history 
     * instance that you may use to navigate.
     */
    const history = useHistory();

    /**
     * @function useState() a Hook that allows you to have state 
     * variables in functional components. 
     * 
     * You pass the initial state to this function and it returns
     * a variable with the current state value (not necessarily 
     * the initial state) and another function to update this value.
     */
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const signIn = e => {
        e.preventDefault();
        // fancy firebase signin
    }

    const signUp = e =>{
        e.preventDefault();
    }

    return (
        <LoginContainer>

            <LoginContainer.Image
                onClick={() => history.push("/")}
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png"
                alt=""
            />

            <LoginContainer.Inner>

                <LoginContainer.H1>Sign-In</LoginContainer.H1>

                <LoginContainer.Form>

                    <LoginContainer.H5>E-mail</LoginContainer.H5>

                    <LoginContainer.Input type='text' value={email} onChange={e => setEmail(e.target.value)} />
                    
                    <LoginContainer.H5>Password</LoginContainer.H5>
                    
                    <LoginContainer.Input type='password' value={password} onChange={e => setPassword(e.target.value)} />
                    
                    <LoginContainer.ButtonSignIn onClick={signIn}>
                        
                        Sign In
                        
                    </LoginContainer.ButtonSignIn>

                </LoginContainer.Form>

                <LoginContainer.Para>

                    By signing-in you agree to the AMAZON Conditions of Use & Sale. Please see our Privacy Notice,
                    our Cookies Notice and our Interest-Based Ads Notice.

                </LoginContainer.Para>
                
                <Link style={{ color: '#FFF', width: '100%', textDecoration: "none" }}>
                    
                    <LoginContainer.ButtonSignUp onClick={signUp}>
                        
                        Create your Amazon Account
                        
                    </LoginContainer.ButtonSignUp>

                </Link>

            </LoginContainer.Inner>

        </LoginContainer>
    );
}

export default Login;