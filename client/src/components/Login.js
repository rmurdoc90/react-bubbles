import React, {useState} from "react";
import axios from 'axios';
import {useHistory} from 'react-router-dom'

const Login = () => {
    const [credentials, setCredentials] = useState({
      username:'Lambda School',
      password:'i<3Lambd4'
    })
    const history = useHistory()


    const handleChange = e =>{
    e.preventDefault()
    setCredentials({
      ...credentials,
      [e.target.name]: e.target.value
    })
  }

  const login = e => {
      e.preventDefault()
      axios
      .post('http://localhost:5000/api/login',credentials)
      .then(res => {
        localStorage.setItem("token", res.data.payload);
        history.push('/protected');
      })
      .catch(err => console.log(err));
  };

  // make a post request to retrieve a token from the api
  // when you have handled the token, navigate to the BubblePage route
  return (
    <div>
        <form onSubmit={login}>
          <input
            type="text"
            name="username"
            value={credentials.username}
            onChange={handleChange}
          />
          <input
            type="text"
            name="password"
            value={credentials.password}
            onChange={handleChange}
          />
          <button>Log in</button>
        </form>
      </div>
  );
};

export default Login;
