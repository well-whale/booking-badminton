import axios from "axios";
import { loginStart, loginSuccess, loginFailed } from "./authSlice";
import { toast } from 'react-toastify';

export const loginUser = async (user, dispatch, navigate) => {
    dispatch(loginStart());
    try {
        const response = await axios.post("https://reqres.in/api/login", user); // Replace with your actual login API endpoint
        dispatch(loginSuccess(response.data));
        navigate("/");
        toast.success("Login successful!");
    } catch (err) {
        dispatch(loginFailed());
        if (err.response) {
            toast.error("Login failed. Please check your username or password and try again.");
        } else {
            toast.error("Login failed due to a network error. Please try again.");
        }
    }
};
