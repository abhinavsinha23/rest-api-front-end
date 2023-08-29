import { writeCookie } from "../common"

export const registerUser = async (username, email, password) => {
    try {
        const response = await fetch(`${process.env.REACT_APP_API_URI}/users/registerUser`, {
            method: "POST",
            headers: {"Content-Type" : "application/json"},
            body: JSON.stringify({
                "username": username,
                "email": email,
                "password": password
            })
        })
        const data = await response.json()
        console.log(data)
    } 
    catch (error) {
        console.log(error)
    }
}

export const login = async (username, email, password, newUser) => {
    try {
        const response = await fetch(`${process.env.REACT_APP_API_URI}/users/login`, {
            method: "POST",
            headers: {"Content-Type" : "application/json"},
            body: JSON.stringify({
                "username": username,
                "email": email,
                "password": password
            })
        })
        const data = await response.json()
        console.log(data)
        newUser(data.user.username)
        writeCookie("jwt_token", data.user.token, 7)
    } 
    catch (error) {
        console.log(error)
    }
}

export const getAllUsers = async () => {
    try {
        const response = await fetch(`${process.env.REACT_APP_API_URI}/users/getAllUsers`, {
            method: "GET",
            headers: {"Content-Type" : "application/json", "Authorization" : "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NywiaWF0IjoxNjkyOTgxNTY5fQ.iZ_5C4NJX82uZeAl1kgNdS87a5TbsZ5mX65pJHdkQRY"}
        })
        const data = await response.json()
        console.log(data)
    } 
    catch (error) {
        console.log(error)
    }
}

export const authCheck = async (token) => {
    try {
        const response = await fetch(`${process.env.REACT_APP_API_URI}/users/authCheck`, {
            method: "GET",
            headers: {
                "Content-Type" : "application/json",
                "Authorization" : token
            },
        })
        const data = await response.json()
        return data.user.username
    } 
    catch (error) {
        console.log(error)
    }
}

export const updateUsers = async (username, key, newKey) => {
    try {
        const response = await fetch(`${process.env.REACT_APP_API_URI}/users/updateUsers`, {
            method: "PUT",
            headers: {"Content-Type" : "application/json"},
            body: JSON.stringify({
                username: username,
                key: key,
                newKey: newKey
            })
        })
        const data = await response.json()
        console.log(data)
    } 
    catch (error) {
        console.log(error)
    }
}

export const deleteUsers = async (username) => {
    try {
        const response = await fetch(`${process.env.REACT_APP_API_URI}/users/deleteUsers`, {
            method: "DELETE",
            headers: {"Content-Type" : "application/json"},
            body: JSON.stringify({
                username: username,
            })
        })
        const data = await response.json()
        console.log(data)
    } 
    catch (error) {
        console.log(error)
    }
}

