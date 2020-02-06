import React from "react";
import { useAuth0 } from "../react-auth0-spa";

import { Link } from "react-router-dom";

const NavBar = () => {
    const { isAuthenticated, loginWithRedirect, logout } = useAuth0();

    return (
        <div>
            {!isAuthenticated && (
                <button data-testid="login" onClick={() => loginWithRedirect({})}>Log in</button>
            )}

            {isAuthenticated && <button data-testid="logout" onClick={() => logout()}>Log out</button>}
            {isAuthenticated && (
                <span>
                    <Link to="/">Home</Link>&nbsp;
                    <Link to="/profile">Profile</Link>
                </span>
            )}
        </div>
    );
};

export default NavBar;