import { useState } from 'react';
import { useHistory } from "react-router-dom"
import PropTypes from 'prop-types';

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

    const history = useHistory()

    const handleSubmit = async e => {
        e.preventDefault();
        const token = await loginUser({
          username,
          password
        });
        setToken(token);
      }
    

    return (
        <div className="login">
            <h2> Sign In </h2>
            <form onSubmit={handleSubmit}>
                <input type="text" id="login" class="fadeIn second" name="login" placeholder="login"
                    onChange={e => setUserName(e.target.value)}/>
                <input type="text" id="password" class="fadeIn third" name="login" placeholder="password"
                    onChange={e => setPassword(e.target.value)}/> 
                <div className="incorrect-password" style={{display: 'none'}}>
                    <h2 >Incorrect password!</h2>
                </div>
                <button type="submit">Log In</button>
            </form>

            <div id="formFooter">
                <a class="underlineHover" href="#">Forgot Password?</a>
            </div>
        </div>
    );
}
 
Login.propTypes = {
    setToken: PropTypes.func.isRequired
}
