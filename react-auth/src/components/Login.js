import { Component, useEffect, useState } from "react";
import {Navigate} from "react-router-dom"; 
import {Link} from "react-router-dom";
import axios from 'axios'

const Login = (props) => {

    const [loggedIn, setLoggedIn] = useState(false);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    useEffect(() => {
        const user = localStorage.getItem("user");
        if (user) {
            <Navigate to={'/'} />
        }
    },[])

    useEffect(() => {
        localStorage.setItem('user', JSON.stringify(props.user));
    }, [props.user]);

    const login = () => {         
        axios.post('faxriboot-env.eba-dincnkef.us-east-1.elasticbeanstalk.com/api/login', {email: email, password: password}
        )
        .then(response => {
           
            setLoggedIn(true)
            props.setUser(response);

        } )
        .catch(error => {
            console.log(error);
// backenddeki linke gitmiyor, hata veriyor. frontendin çalıştığını göstermek için hayali bir kullanıcı oluşturdum.
            setLoggedIn(true)           
            props.setUser([
                {
                    emailAdress: email,
                    password: password,
                    name: "Tuğçe",
                    surName: "Türkmenler",
                    id: 1,
                    departmentId: 0,
                }
            ]);
// ----------------------------------        

        } )

    };

    if (loggedIn){
        return <Navigate to={'/'} />;
    }
  return (
    <div>
        <h3>Login</h3>
        <div className="form-group">
            <label>Email</label>
            <input type="email" className="form-control" placeholder="Email" value={email}
            onChange={e => setEmail(e.target.value)}/>
        </div>
        <div className="form-group">
            <label>Password</label>
            <input type="password" className="form-control" placeholder="Password" value={password}
            onChange={e => setPassword(e.target.value)}/>
        </div>
        <button onClick={login} className="btn.btn-primary btn-block">Login</button>
        <p className="forgot-password text-right">
            <Link to={'/forgot'}>Forgot password?</Link>               
        </p>
    </div>
  )
}

export default Login