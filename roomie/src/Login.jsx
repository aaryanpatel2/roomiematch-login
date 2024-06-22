import React from "react";
import { useState } from "react";
import axios from 'axios';
import {useNavigate} from 'react-router-dom'
import './loginstyles.css'
function Login() {

    const [email, setEmail] = useState();
    const [password, setPassword] = useState()
    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('http://localhost:3001/login', {email, password})
        .then(result => {
            console.log(result)
            if (result.data === "Login successful") {
                navigate('/home')
            }
        })
        .catch(err=> console.log(err))
    }

    return (   
            <body>
            <h1>Login</h1>
            <form onSubmit={handleSubmit}>
                <label>
                    Email:
                    <input type="email" onChange={(e) => {setEmail(e.target.value)}}/>
                </label>
                <label>
                    Password:
                    <input type="password" onChange={(e) => {setPassword(e.target.value)}}/>
                </label>
                <button type="submit">Login</button>
            </form>
            </body>
        
    )
}

export default Login;