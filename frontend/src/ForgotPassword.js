import { useState } from "react";
import { useHistory } from 'react-router';

async function resetPassword(msg) {
    return fetch('/users/forgot-password', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(msg)
      })
      .then(data => data.json())
   }

const ForgotPassword = () => {

    const [username, setUsername] = useState(".");
    const history = useHistory();
    

    const handleSubmit = async e => {
        e.preventDefault();

        if(username != ".") {

            const msg = {
                username: username,
                newPassword: Math.random().toString(36).replace(/[^a-z]+/g, '')
            }

            const response = await resetPassword(msg);
            if(response.status == "False") {
                document.getElementsByClassName("email-sent")[0].style.display = "none";
                document.getElementsByClassName("incorrect-username")[0].style.display = "block";
            } else {
                document.getElementsByClassName("incorrect-username")[0].style.display = "none";
                document.getElementsByClassName("email-sent")[0].style.display = "block";
            }
        }
    }

    const handleReturn = e => {
        e.preventDefault();
        history.push('/');
    }


    return (
        <div className="forgot-password">
            <form onSubmit={handleSubmit}>
                <h1>Forgot Password</h1>
                <h2>Input your username</h2>
                <input type="text" placeholder="username" onChange={e => setUsername(e.target.value)}/>
                <div className="incorrect-username" style={{display: 'none'}}>
                    <h2>Incorrect username provided!</h2>
                </div>
                <div className="email-sent" style={{display: 'none'}}>
                    <h2>Email has been sent!</h2>
                </div>
                <button>Submit</button>
            </form>
            <button onClick={handleReturn}>Back to Login Page</button>
        </div>
        
    );
}
 
export default ForgotPassword;