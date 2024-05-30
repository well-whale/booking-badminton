import React, { useState } from "react";
import { FcGoogle, FcPhone } from "react-icons/fc";
import { NavLink } from "react-router-dom";
import SignupForm from "../signup/Signup";
import "../login/Login.css"
function LoginForm() {
    const [state, setState] = useState({
        email: "",
        password: ""
    });

    const handleChange = evt => {
        const value = evt.target.value;
        setState({
            ...state,
            [evt.target.name]: value
        });
    };

    const handleOnSubmit = evt => {
        evt.preventDefault();
        const { email, password } = state;
        alert(`You are logging in with email: ${email} and password: ${password}`);
        setState({ email: "", password: "" });
    };

    const [isShowPassword, setIsShowPassword] = useState(false);

    return (
        <div className="form-container sign-in-container">
            <form onSubmit={handleOnSubmit}>
                <h1>Login</h1>
                <div className="social-container">
                    <NavLink to="/googleoauth" className="social"><FcGoogle /></NavLink>
                    <NavLink to="/loginotp" className="social"><FcPhone /></NavLink>
                </div>
                <span>or use your account</span>
                <input
                    type="email"
                    placeholder="Email"
                    name="email"
                    value={state.email}
                    onChange={handleChange}
                />
                <div className="input-pass">
                    <input
                        type={isShowPassword ? "text" : "password"}
                        name="password"
                        placeholder="Password"
                        value={state.password}
                        onChange={handleChange}
                    />
                    <i
                        className={isShowPassword ? "fa-solid fa-eye" : "fa-sharp fa-solid fa-eye-slash"}
                        onClick={() => setIsShowPassword(!isShowPassword)}
                    />
                </div>
                <a href="#">Forgot your password?</a>
                <button type="submit">Login</button>
            </form>
        </div>
    );
}

function LoginAndSignupForm() {
    const [type, setType] = useState("signIn");

    const handleOnClick = text => {
        if (text !== type) {
            setType(text);
        }
    };
    const containerClass = `container ${type === "signUp" ? "right-panel-active" : ""}`;
    return (
        <div className="App">
            <div className={containerClass} id="container">
                <SignupForm />
                <LoginForm />
                <div className="overlay-container">
                    <div className="overlay">
                        <div className="overlay-panel overlay-left">
                            <h1>Welcome Back!</h1>
                            <p>To keep connected with us please login with your personal info</p>
                            <button className="ghost" id="signIn" onClick={() => handleOnClick("signIn")}>
                                Sign In
                            </button>
                        </div>
                        <div className="overlay-panel overlay-right">
                            <h1>Hello, Friend!</h1>
                            <p>Enter your personal details and start your journey with us</p>
                            <button className="ghost" id="signUp" onClick={() => handleOnClick("signUp")}>
                                Sign Up
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LoginAndSignupForm;
