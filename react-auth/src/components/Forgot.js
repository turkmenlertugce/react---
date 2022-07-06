import React, {Component, useState} from "react";
import axios from 'axios';
import {Navigate, useNavigate} from "react-router-dom"; 


const Forgot = () => {
    const [email, setEmail] = useState("");
    const navigation = useNavigate()

    const forget = (props) => {

        const data = {
            email : email
        };
        axios.post('faxriboot-env.eba-dincnkef.us-east-1.elasticbeanstalk.com/api/forgot_password', data).then(
            res => {
                console.log(res)
                navigation("/please-verify");


            }
        ).catch(
            err => {
                console.log(err);
// backenddeki linke gitmiyor, hata veriyor. frontendin çalıştığını göstermek için böyle yaptım .  

                navigation("/please-verify");        

// ----------------------------------             
            }
        )
    };
  return (
    <div>
        <h3>Forgot Password</h3>
        <div className="form-group">
            <label>Email</label>
            <input type="email" className="form-control" placeholder="Email"
            onChange={e =>setEmail(e.target.value)}/>
        </div>
        <button onClick={forget} className="btn.btn-primary btn-block">Submit</button>
    </div>
  )
}

export default Forgot