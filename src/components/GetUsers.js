import React from 'react'
import { getAllUsers } from '../utils'

const GetUsers = () => {
    const getHandler = async () => {
        await getAllUsers()
    }

    return (
        <div className='get'>
            <button onClick={getHandler}>Click here to see all users</button>
        </div>
    )
}

export default GetUsers