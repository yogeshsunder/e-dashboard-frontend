import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

const Nav = () => {
    const auth = localStorage.getItem('user')
    const navigate = useNavigate();
    useEffect(() => {
        const auth = localStorage.getItem('user');
        if (auth) {
            navigate("/");
        }
    }, [])
    const logout = () => {
        localStorage.clear();
        navigate('/SignUp');

    }

    return (
        <div>
            <img 
            alt="logo" 
            className="logo"
            src="https://i0.wp.com/softiatric.com/wp-content/uploads/2023/04/1234-2-modified.png?resize=150%2C150&ssl=1%201x"/>

            {auth ? <ul className="nav-ul">
                <li><Link to="/">Products</Link></li>
                <li><Link to="/add">Add Products</Link></li>
                <li><Link to="/update/">Update Products</Link></li>
                <li><Link to="/profile">Profile</Link></li>
                <li><Link onClick={logout} to="/SignUp">Logout({JSON.parse(auth).name})</Link></li>
            </ul>
                : <ul className="nav-ul nav-right">
                    <li><Link to="/SignUp">Sign Up</Link></li>
                    <li><Link to="/login">Login</Link></li>
                </ul>

}
        </div>
    )
}

export default Nav;