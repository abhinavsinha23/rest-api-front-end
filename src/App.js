import { useState, useEffect } from 'react';
import './App.css';
import Register from './components/Register';
import Login from './components/Login';
import GetUsers from './components/GetUsers';
import Update from './components/Update';
import Delete from './components/Delete';
import { getCookie } from './common';
import { authCheck } from './utils';

function App() {
  const [user, setUser] = useState()

  useEffect(() => {
    console.log("Use effect ran")
    let cookie = getCookie("jwt_token")
    console.log(cookie)

    if (cookie !== false) {
      loginWithToken(cookie)
    }
  }, [])

  const loginWithToken = async (cookie) => {
    // make the request to my authCheck route
    let user = await authCheck(cookie)
    setUser(user)
  } 

  return (
    <div className="App">
      <h1>Hello World</h1>
      <Register /> 
      <br></br>
      <br></br>
      <Login newUser = {setUser} />
      {
        user
          ?
          <>
            <h2>Hello {user} you have logged in</h2>
            <br></br>
            <br></br>
            <GetUsers />
          </>
          :
          <h2>Please log in</h2>
      }
      <br></br>
      <br></br>
      <Update />
      <br></br>
      <br></br>
      <Delete />
    </div>
  );
}

export default App;
