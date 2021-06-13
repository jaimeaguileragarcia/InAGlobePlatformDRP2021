import { useState } from 'react';
import { useHistory } from "react-router-dom"
import useFetch from './useFetch'

const Login = ({ setToken }) => {
    const [username, setUserName] = useState();
    const [password, setPassword] = useState();
    const [loginSuccess, setLoginSuccess] = useState(false);

    const history = useHistory()

    async function loginUser(credentials) {
        return fetch('/users/login', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(credentials)
        })
          .then(data => setLoginSuccess(data))
    }

    const handleSubmit = async e => {
        e.preventDefault();
        const token = await loginUser({
          username,
          password
        }).then(setToken(token))

        if(!loginSuccess) {
            document.getElementsByClassName("incorrect-password")[0].style.display = "block";
        } else {
            history.push('/home');
        }
      }
    

    return (
        <div className="login">
            <h2> Sign In </h2>
            <form>
                <input type="text" id="login" class="fadeIn second" name="login" placeholder="login"
                    onChange={e => setUserName(e.target.value)}/>
                <input type="text" id="password" class="fadeIn third" name="login" placeholder="password"
                    onChange={e => setPassword(e.target.value)}/>
                <div className="incorrect-password">
                    <h2 style={{display: 'none'}}>Incorrect password!</h2>
                </div>
                <button onClick={handleSubmit}>Log In</button>
            </form>

            <div id="formFooter">
                <a class="underlineHover" href="#">Forgot Password?</a>
            </div>
        </div>
    );
}
 
export default Login;