import { Link } from "react-router-dom";
import { useState } from "react";
import axios from 'axios';
import {useNavigate} from 'react-router-dom'
function Signup() {

    const [name, setName] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState()
    const navigate = useNavigate()
        
    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('http://localhost:3001/signup', {name, email, password})
        .then(result => {console.log(result)
            navigate('/login')
        })
        .catch(err=> console.log(err))
    }

    return (
        <div>
            <h1>Sign up</h1>
            <form onSubmit={handleSubmit}>
                <label>
                    Name:
                    <input type="name" name="email" onChange={(e) => {setName(e.target.value)}} />
                </label>
                <label>
                    Email:
                    <input type="email" onChange={(e) => {setEmail(e.target.value)}}/>
                </label>
                <label>
                    Password:
                    <input type="password" onChange={(e) => {setPassword(e.target.value)}}/>
                </label>
                <button type="submit">Sign up</button>
                
            </form>
            <Link to="/login">
            Login
            </Link>
        </div>
    );
}

export default Signup;