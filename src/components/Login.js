import React from "react";
import { useState } from "react";
import { login } from "../utils";

const Login = ({newUser}) => {
    const [username, setUsername] = useState()
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()

    const loginHandler = async (event) => {
        event.preventDefault()
        await login(username, email, password, newUser)
    }

    return (
        <div className='login'>
            <h2>Login below</h2>
            <form onSubmit={loginHandler}>
                <label>Username:
                    <input onChange={(event) => setUsername(event.target.value)}></input>
                </label>
                <br></br>
                <label>Email:
                    <input onChange={(event) => setEmail(event.target.value)}></input>
                </label>
                <br></br>
                <label>Password:
                    <input onChange={(event) => setPassword(event.target.value)}></input>
                </label>
                <br></br>
                <button type='submit'>Login</button>
            </form>
            <br></br>
        </div>
    )
}

export default Login