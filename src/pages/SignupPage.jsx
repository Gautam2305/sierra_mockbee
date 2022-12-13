import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { NavBar } from "../components/NavBar";
import axios from "axios";
import { useAuth } from "../contexts/auth-context";

export const SignupPage = () => {
    const navigate = useNavigate()

    const [userSignup, setUserSignup] = useState({
        username:"",
        email:"",
        password:"",
    });
    const { setUser } = useAuth();

    const signupHandler = (e) => {
        setUserSignup( prevState => ({
            ...prevState,
            [e.target.name]: e.target.value,
        }))
    }

    const signupUserHandler = async () => {
        try{
            const response = await axios.post("/api/auth/signup", userSignup)
            setUser({
                user: response.data.createdUser,
                token: response.data.encodedToken
            });
            navigate("/")
        }catch (error){
            console.log(error)
        }
    }

    return(
        <>
        <NavBar/>
        <main className="main-login">
        <div className="modal-login">
            <h3>SIGN-UP</h3>
            <label htmlFor="login-user">
                <h4>Username</h4>
                <input 
                name={userSignup.email}
                onChange={ e => signupHandler(e)}
                className="login-username" 
                id="login-user" 
                type="text" 
                placeholder="Enter username"/>
            </label>
            <label htmlFor="login-email">
                <h4>Email</h4>
                <input
                name={userSignup.password}
                onChange={ e => signupHandler(e)} 
                className="login-email-id" 
                id="login-email" 
                type="text" 
                placeholder="Enter email"/>
            </label>
            <label htmlFor="login-password">
                <h4>Password</h4>
                <input 
                name={userSignup.password}
                onChange={ e => signupHandler(e)}
                className="login-pw" 
                id="login-password" 
                type="password" 
                placeholder="Password"/>
            </label>
                {/* <h6>By continuing, I agree to the <span className="primary-text-color">Terms of Use</span>& <span className="primary-text-color">Privacy Policy</span></h6> */}
                <button className="btn-primary-solid link-primary-solid" onClick={()=>signupUserHandler()}><h4>SIGN UP</h4></button>
                <h6>Have trouble logging in? <span className="primary-text-color">Get help</span></h6>
            </div>
    </main>
        </>
    );
}