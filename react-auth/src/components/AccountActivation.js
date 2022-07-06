import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

const AccountActivation = () => {
    const [password,setPassword] = useState("")
    const [passwordAgain,setPasswordAgain] = useState("")

    const navigation = useNavigate();

    const [userr , setUserr] = useState([])
    useEffect(() => {
        setUserr(JSON.parse(localStorage.getItem("user")));
        console.log(userr);
    }, [])

    const activate = () => {
        axios.post('faxriboot-env.eba-dincnkef.us-east-1.elasticbeanstalk.com/api/activate_account/confirm', {password:password,passwordAgain:passwordAgain}).
        then(res => {
            console.log(res.data);
            navigation("/");
        }).catch(err => {
            console.log(err);

        })
    }

  return (
    <div>
        <h3>Account Activation</h3>
        <div className="form-group">
            <label>Password</label>
            <input type="password" className="form-control" placeholder="Password" value={password}
            onChange={e => setPassword(e.target.value)}/>
        </div>
        <div className="form-group">
            <label>Password Again</label>
            <input type="password" className="form-control" placeholder="Password" value={passwordAgain}
            onChange={e => setPasswordAgain(e.target.value)}/>
        </div>
        <button onClick={activate} className="btn.btn-primary btn-block">Activate</button>
    </div>
  )
}

export default AccountActivation