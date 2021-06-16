import { useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom'

async function loginUser(credentials) {
    return fetch('/users/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(credentials)
      })
      .then(data => data.json())
   }

export default function Login({ setToken }) {
    const [username, setUserName] = useState();
    const [password, setPassword] = useState();

    const handleSubmit = async e => {
        e.preventDefault();
        const token = await loginUser({
          username,
          password
        });
        if(token.token != "") {
            setToken(token);
        } else {
            document.getElementsByClassName("incorrect-password")[0].style.display = "block";

        }
    }
    

    return (
        <div className="login">
            <h1> InAGlobe Platform </h1>
            <form onSubmit={handleSubmit}>
                <input type="text" id="login" class="fadeIn second" name="login" placeholder="login"
                    onChange={e => setUserName(e.target.value)}/>
                <input type="password" id="password" class="fadeIn third" name="login" placeholder="password"
                    onChange={e => setPassword(e.target.value)}/> 
                <div className="incorrect-password" style={{display: 'none'}}>
                    <h2>Incorrect password!</h2>
                </div>
                <div className="links">
                    <Link to={`/forgot-password`}>Forgot Password</Link>
                </div>
                <button type="submit">Log In</button>
            </form>
        </div>
    );
}
 
Login.propTypes = {
    setToken: PropTypes.func.isRequired
}
