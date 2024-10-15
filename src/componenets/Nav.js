import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

const Nav = () => {
    const auth = localStorage.getItem('user')
    const navigate = useNavigate();
    const logout =()=>{
        localStorage.clear();
        navigate('/SignUp');
        
    }
    
    return (
        <div>
            <ul className="nav-ul">
                <li><Link to="/">Products</Link></li>
                <li><Link to="/add">Add Products</Link></li>
                <li><Link to="/update">Update Products</Link></li>
                <li><Link to="/profile">Profile</Link></li>
                <li>{ auth ? <Link onClick={logout}to="/SignUp">Logout</Link> :
                <Link to="/SignUp">Sign Up</Link>}</li>
            </ul>
        </div>
    )
}

export default Nav;