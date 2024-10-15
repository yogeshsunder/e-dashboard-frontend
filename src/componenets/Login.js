import React from 'react';
import {useNavigate} from 'react-router-dom'

const Login = ()=>{
    const[email, setEmail]=React.useState('');
    const[password, setPassword]=React.useState('');
    const navigate = useNavigate();
    const handleLogin = async ()=>{
        console.warn("email, password", email, password);
        let result = await fetch('http://localhost:5000/login',{
            method:'post',
            body:JSON.stringify({email, password}),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        result = await result.json();
        console.warn(result)
        if(result.name){
            localStorage.setItem("user",JSON.stringify(result));
            navigate("/");

        }else{
            alert("Please enter correct details")
        }
        
    }
    return (
    <div className="login">
        <input type="text" className="inputSignup" placeholder="Enter Email" 
        onChange={(e)=>setEmail(e.target.value)} value={email}/>

        <input type="password" className="inputSignup" placeholder="Enter Email" 
        onChange={(e)=>setPassword(e.target.value)} value={password}/>

        <button onClick={handleLogin}className="button_signup" type="button">Login</button>
    </div>
    )   
}

export default Login