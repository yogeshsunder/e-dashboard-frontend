import React, { useState } from "react";

const SignUp = () => {
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    const collectData=()=>{
        console.warn(name, password, email)
    }
    return (
        <div className="div_signup">
            <h1>Register</h1>
            < input className="inputSignup" type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Enter UserName" />
            < input className="inputSignup" type="text" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Enter Email" />
            < input className="inputSignup" type="password" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Enter Password" />
            <button onClick={collectData} className="button_signup" type="button">SignUp</button>
        </div>
    )
}

export default SignUp;