import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { GoogleOAuthProvider } from '@react-oauth/google';
import SignupForm from "../signup/Signup";
import "../login/Login.css";
import GoogleOAuth from "./Google_OAuth";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { loginUser } from "../../redux/apiRequest";
import { useDispatch } from "react-redux";

function LoginForm() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [isShowPassword, setIsShowPassword] = useState(false);

    const handleLogin = (e) => {
        e.preventDefault();

        if (!username || !password) {
            toast.error("Both username and password fields are required.");
            return;
        }

        const newUser = {
            username: username,
            password: password,
        };

        loginUser(newUser, dispatch,navigate);
    };

    return (
        <div className="form-container sign-in-container">
            <form onSubmit={handleLogin}>
                <h1>Login</h1>
                <div className="social-container">
                    <GoogleOAuthProvider clientId="21328047732-02qfv7vb9ku5n0ov51v8d3k8vqb7e1ab.apps.googleusercontent.com">
                        <GoogleOAuth />
                    </GoogleOAuthProvider>
                    <NavLink to="/loginotp">
                        <button className="logphone" type="button">Sign in with phone</button>
                    </NavLink>
                </div>
                <span>or use your account</span>
                <input
                    type="text"
                    placeholder="Username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
                <div className="input-pass">
                    <input
                        type={isShowPassword ? "text" : "password"}
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <i
                        className={isShowPassword ? "fa-solid fa-eye" : "fa-sharp fa-solid fa-eye-slash"}
                        onClick={() => setIsShowPassword(!isShowPassword)}
                    />
                </div>
                <a href="#">Forgot your password?</a>
                <button className="submit" type="submit">Login</button>
            </form>
            <ToastContainer />
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
