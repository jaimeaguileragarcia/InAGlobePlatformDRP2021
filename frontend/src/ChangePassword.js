
import useToken from './useToken';
import { Link, useHistory } from 'react-router-dom'
import { useState } from 'react'

const ChangePassword = () => {
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const {setToken, token} = useToken()
  const history = useHistory()

async function passwordUpdate() {
  return fetch('/users/update-password', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        username: token,
        oldPassword: oldPassword,
        newPassword: newPassword})
    })
    .then(data => data.json())
 }

  const handleSubmit = async e => {
      e.preventDefault();
      const updated = await passwordUpdate();

      if(updated.status != "True") {
         document.getElementsByClassName("incorrect-password")[0].style.display = "block";
      }
      else{
        document.getElementsByClassName("password-changed-msg")[0].style.display = "block";
      }
    }
  
return (
  <div className="change-password">
      <h2>Change Password</h2>
      <label >Current Password</label>
      <input  
        onChange={(e) => setOldPassword(e.target.value)}
        placeholder="Current Password"
      />

      <label >New Password</label>
      <input  
        onChange={(e) => setNewPassword(e.target.value)}
        placeholder="New Password"
      />

      <button onClick={handleSubmit}>Change password</button>

      <h2 className="incorrect-password" style={{display: "none"}}>Incorrect password</h2>

      <div className="password-changed-msg" style={{display: "none"}}>
        <h3>Your password has been changed successfully</h3>
        <Link to={`/`}>Back to Dashboard</Link>
      </div>

  </div>
  
  )

}

export default ChangePassword;