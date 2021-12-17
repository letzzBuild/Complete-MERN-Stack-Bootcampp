import React from 'react';
import './style.css'

function Login() {
    return (
        <div className="container">
            <h1>Sign In</h1>
            <form>
                <input type="text" placeholder="Username" />
                <input type="password" placeholder="Password" />
                <button>Sign In</button>
            </form>
        </div>
    )
}

export default Login
