import React from "react";
import { useState } from "react";
import { updateUsers } from "../utils";

const Update = () => {
    const [username, setUsername] = useState()
    const [key, setKey] = useState()
    const [newKey, setNewKey] = useState()

    const updateHandler = async (event) => {
        event.preventDefault()
        await updateUsers(username, key, newKey)
    }

    return (
        <div className='update'>
            <h2>Update a user below</h2>
            <form onSubmit={updateHandler}>
                <label>Username:
                    <input onChange={(event) => setUsername(event.target.value)}></input>
                </label>
                <br></br>
                <label>Key to update:
                    <input onChange={(event) => setKey(event.target.value)}></input>
                </label>
                <br></br>
                <label>New key value:
                    <input onChange={(event) => setNewKey(event.target.value)}></input>
                </label>
                <br></br>
                <button type='submit'>Update</button>
            </form>
            <br></br>
        </div>
    )
}

export default Update