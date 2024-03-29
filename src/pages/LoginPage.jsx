import { useState } from "react";
import React from "react";
import { NavBar } from "../components/NavBar";
import { useAuth } from "../contexts/auth-context";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const LoginPage = () =>{

    const [userDetail, setUserDetail] = useState({email:"", password:""});
    const { setUser } = useAuth();
    const navigate = useNavigate();
    const loginHandler = (e) => {
        setUserDetail( prevState => ({
            ...prevState,
            [e.target.name]: e.target.value,
        }))
    }


    const loginUserHandler = async () => {
        try{
            const response = await axios.post("/api/auth/login",userDetail)
            setUser({
                user: response.data.foundUser,
                token: response.data.encodedToken
            });
            navigate("/products")
        console.log(response.data.foundUser)

        }
        catch (error){
            console.log(error);
        }

    }
    return(
        <>
        <NavBar/>
        <main className="main-login">
        <div className="modal-login">
            <h3>LOGIN</h3>
            <label htmlFor="login-email">
                <h4>Email</h4>
                <input 
                name="email"
                id="login-email"
                onChange={ e => loginHandler(e)}
                value={userDetail.email}
                className="login-email-id" 
                type="text" 
                placeholder="Enter email"/>
            </label>
            <label htmlFor="login-password">
                <h4>Password</h4>
                <input 
                name="password"
                onChange={ e => loginHandler(e)}
                value={userDetail.password}
                className="login-pw" 
                id="login-password" 
                type="password" 
                placeholder="Password"/>
            </label>            
                <button className="btn-primary-solid" onClick={loginUserHandler}>
                    <Link to="/products" className="link-primary-solid" ><h4>CONTINUE</h4></Link></button>
                <button className="btn-primary-outline">
                    <Link to="/signup" className="link-primary-outline" ><h4>SIGN UP</h4></Link></button>
            </div>
    </main>
        </>
    );
}
export { LoginPage };