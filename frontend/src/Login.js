import { useState } from 'react';
import { useHistory } from "react-router-dom"
import useFetch from './useFetch'

const Login = ({ setToken }) => {
    const [username, setUserName] = useState();
    const [password, setPassword] = useState();

    const history = useHistory()


    const handleSubmit = async e => {
        e.preventDefault();

        const credentials = {username, password}

        fetch('/users/login', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(credentials)
          })
          .then(res => {
            if (!res.ok) { // error coming back from server
            throw Error('could not fetch the data for that resource');
            } 
            return res.json();
            })
            .then(  
            data => {
            if(data.status == "True") {
                history.push('/home');
            } else {
                document.getElementsByClassName("incorrect-password")[0].style.display = "block";
            }
        })


      
      }
    

    return (
        <div className="login">
            <h2> Sign In </h2>
            <form>
                <input type="text" id="login" class="fadeIn second" name="login" placeholder="login"
                    onChange={e => setUserName(e.target.value)}/>
                <input type="text" id="password" class="fadeIn third" name="login" placeholder="password"
                    onChange={e => setPassword(e.target.value)}/> 
                <div className="incorrect-password" style={{display: 'none'}}>
                    <h2 >Incorrect password!</h2>
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
