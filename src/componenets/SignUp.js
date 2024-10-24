import React, { useState, useEffect } from "react";
import {json, Navigate, useNavigate} from 'react-router-dom';

const SignUp = () => {
    const [name, setName] = useState("");    
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const Navigate = useNavigate();

    useEffect(() => {
        const auth = localStorage.getItem('user')
        if (auth) {
            Navigate('/')
        }
    })

    const collectData = async () => {
        console.warn(name, email, password)
        let result = await fetch('http://localhost:5000/register', {
                method: 'post',
                body: JSON.stringify({ name, email, password }),
                headers: {
                    'Content-Type': 'application/json'
                },
            }
        );
        result = await result.json();
        console.warn(result);
        localStorage.setItem("user", JSON.stringify(result.result));
        localStorage.setItem("token", JSON.stringify(result.auth));
        //Navigate('/');
         if(result)
         {
             Navigate('/')
        }
    }
    return (
        <div className="div_signup">
            <h1>Register</h1>
            < input className="inputSignup" type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Enter UserName" />
            < input className="inputSignup" type="text" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Enter Email" />
            < input className="inputSignup" type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Enter Password" />
            <button onClick={collectData} className="button_signup" type="button">SignUp</button>
        </div>
    )
}

export default SignUp;