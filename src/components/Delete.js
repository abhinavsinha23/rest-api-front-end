import React from "react";
import { useState } from "react";
import { deleteUsers } from "../utils";

const Delete = () => {
    const [username, setUsername] = useState()

    const deleteHandler = async (event) => {
        event.preventDefault()
        await deleteUsers(username)
    }

    return (
        <div className='delete'>
            <h2>Delete a user below</h2>
            <form onSubmit={deleteHandler}>
                <label>Username:
                    <input onChange={(event) => setUsername(event.target.value)}></input>
                </label>
                <br></br>
                <br></br>
                <button type='submit'>Delete user</button>
            </form>
            <br></br>
        </div>
    )
}

export default Delete