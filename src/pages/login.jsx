import '../css/login.css';

import {Link, useNavigate} from 'react-router-dom';
import Logo from '../img/Library (3).png';
import loginNAME from '../img/login.png'
import { useState, useEffect } from 'react';
import loginApi from '../js/loginAPI';

import Swal from 'sweetalert2';

import ValidateToken from '../js/validateToken';

const Login = () => {

    const [userName, setUserName] = useState()
    const [password, setPassword] = useState()
    const [errorToken] = ValidateToken()

    //redirect page
    let redirect = useNavigate()

    //alert for  user
    const alertSuccess = (txt) => {
        Swal.fire({
        icon: 'success',
        title: 'Login success',
        text: txt,
        showConfirmButton: false,
        timer: 1500
    })}

    useEffect(() => {
        if (!errorToken) {
            alertSuccess("You are already logged in")
            return redirect('/')
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[errorToken])

    const formSubmit = (e) => {
        e.preventDefault()
    };

    return(
        <div className="loginContainer">
        <div className='titlePage' > <img alt='book' src={loginNAME}/> </div>
            
            <form className='formLogin' onSubmit={formSubmit}>

                <img src={Logo} alt="Logo" />

                <label htmlFor="usernameLogin">Username</label>
                <input type="email" placeholder="Email" id="usernameLogin" required
                
                onChange={(event) => setUserName(event.target.value)}
                />

                <label htmlFor="passwordLogin">Password</label>
                <input type="password" placeholder="Password" id="passwordLogin" required
                
                onChange={(event) => setPassword(event.target.value)}
                />

                <button className='btnLogin' onClick={() => { loginApi(userName, password);}} >Log In</button>

            </form>

            <h4>Don't have an account yet? , <b> <Link to="/register">register here</Link> </b> </h4>
        
        </div> 
)

}
   
export default Login;