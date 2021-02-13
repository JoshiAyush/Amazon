import React, { useState } from "react";
import { useHistory } from "react-router-dom";

import { SignUpContainer } from "./style/SignUp.js";

import { validateForm } from "../../validate.js";

function SignUp() {

    /**
     * @function useHistory() hook gives you access to the history 
     * instance that you may use to navigate.
     */
    const history = useHistory();

    const [fname, setfName] = useState("");
    const [lname, setlName] = useState("");
    const [mobile, setMobile] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmedPassword, setConfirmedPassword] = useState("");

    const register = () => {

    }

    const handleSubmit = (e) => {
        e.preventDefault();

        if (validateForm(fname, lname, mobile, email, password, confirmedPassword))
            register();
        else
            window.alert("Fields must be correct take a look to the fields and try again after making corrections");
    }

    return (
        <div className="createAccount">
            <img
                onClick={() => history.push("/")}
                className="createAccount__logo"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png"
                alt=""
            />
            <div className="signup__container">
                <form>
                    <div className="user__name">
                        <span>
                            <h5>First Name</h5>
                            <input type="text" value={fname} onChange={e => { setfName(e.target.value) }} />
                        </span>
                        <span>
                            <h5>Last Name</h5>
                            <input type="text" value={lname} onChange={e => { setlName(e.target.value) }} />
                        </span>
                    </div>
                    <div className="user__mobile">
                        <select>
                            <option selected>{"+1"}</option>
                        </select>
                        <input type="phone" value={mobile} onChange={e => { setMobile(e.target.value) }} placeholder="Mobile" />
                    </div>
                    <div className="user__credentials">
                        <h5>E-mail</h5>
                        <input type='text' value={email} onChange={e => setEmail(e.target.value)} />
                        <h5>Password</h5>
                        <input type='password' value={password} onChange={e => setPassword(e.target.value)} />
                        <h5>Confirm Password</h5>
                        <input type='password' value={confirmedPassword} onChange={e => setConfirmedPassword(e.target.value)} />
                        <button onClick={handleSubmit} className="signup__button">Sign Up</button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default SignUp;