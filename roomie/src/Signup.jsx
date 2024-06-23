import { Link } from "react-router-dom";
import { useState } from "react";
import axios from 'axios';
import {useNavigate} from 'react-router-dom'
function Signup() {

    const [name, setName] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState()
    const [imageURL, setImageURL] = useState()
    const [age, setAge] = useState()
    const [gender, setGender] = useState()
    const [budget, setBudget] = useState()
    const [pet, setPet] = useState()
    const [clean, setClean] = useState()
    const [social, setSocial] = useState()
    const [alcnsmoke, setAlcnsmoke] = useState()
    const [sleep, setSleep] = useState()
    const [interest, setInterest] = useState()
    const match = "";
    const navigate = useNavigate()
        
    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('http://localhost:3001/signup', {name, email, password, imageURL, age, gender, budget, pet, clean, social, alcnsmoke, sleep, interest, match})
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
                <label>
                    Image URL:
                    <input type="text" onChange={(e) => {setImageURL(e.target.value)}}/>
                </label>
                <label>
                    Age:
                    <input type="text" onChange={(e) => {setAge(e.target.value)}}/>
                </label>
                <label>
                    Gender:
                    <input type="text" onChange={(e) => {setGender(e.target.value)}}/>
                </label>
                <label>
                    Budget:
                    <input type="text" onChange={(e) => {setBudget(e.target.value)}}/>
                </label>
                <label>
                    Pet:
                    <input type="text" onChange={(e) => {setPet(e.target.value)}}/>
                </label>
                <label>
                    Clean:
                    <input type="text" onChange={(e) => {setClean(e.target.value)}}/>
                </label>
                <label>
                    Social:
                    <input type="text" onChange={(e) => {setSocial(e.target.value)}}/>
                </label>
                <label>
                    Alcohol and Smoke:
                    <input type="text" onChange={(e) => {setAlcnsmoke(e.target.value)}}/>
                </label>
                <label>
                    Sleep:
                    <input type="text" onChange={(e) => {setSleep(e.target.value)}}/>
                </label>
                <label>
                    Interest:
                    <input type="text" onChange={(e) => {setInterest(e.target.value)}}/>
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