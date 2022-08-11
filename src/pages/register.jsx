import { Link, useNavigate } from 'react-router-dom';
import '../css/register.css';
import Logo from '../img/Library (3).png';
import registerNAME from '../img/register.png'

import { useState, useEffect } from 'react';
import registerApi from '../js/registerAPI';

import ValidateToken from '../js/validateToken';
import Swal from 'sweetalert2';

const Register = () => {

    const [name, setName] = useState("")
    const [lastName, setLastName] = useState("")
    const [username, setUserName] = useState("")
    const [rol, setRol] = useState("")
    const [gender, setGender] = useState("")
    const [password, setPassword] = useState("")
    const [passwordConfirm, setPasswordConfirm] = useState("")

    const [errorToken] = ValidateToken()

    let redirect = useNavigate()

    const alertSuccess = (txt) => {
        Swal.fire({
        icon: 'success',
        title: 'Login success',
        text: txt,
        showConfirmButton: false,
        timer: 1500
    })}

    const formSubmit = e => {
        e.preventDefault(); //esto previene que el form se mande. 
    };

  
    useEffect(() => {
        if (!errorToken) {
            alertSuccess("You are already logged in")
            return redirect('/')
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[errorToken])
  

    return (

        <div className="registerContainer">
            {/* <div className="backgroundFormRegister">
                <div className="shape"></div>
                <div className="shape"></div>
            </div> */}
            <div className='titlePage' > <img alt='book' src={registerNAME}/> </div>
            <h2><b>Register now</b>, to enjoy the best books online</h2>
            <form className="formRegister" onSubmit={formSubmit}>
                <img src={Logo} alt="Logo" /> <br/>

                <label htmlFor='nameRegister'>Name</label>
                <input className='ipt' type="text" placeholder="Name" id="nameRegister" required
                   
                   onChange={(event) => setName(event.target.value)}
                />

                <label htmlFor="lastNameRegister">Last name</label>
                <input className='ipt' type="text" placeholder="Last Name" id="lastNameRegister" required
                
                    onChange={(event) => setLastName(event.target.value)}
                />

                <label htmlFor="usernameRegister">Username</label>
                <input className='ipt'type="email" placeholder="Email" id="usernameRegister" required
                
                    onChange={(event) => setUserName(event.target.value)}
                />

                <label>Select Gender</label>
                <select className="form-control "  onChange={(event) => setGender(event.target.value)} required>
                    <option > Select Gender</option>
                    <option value="Men"> Men </option>

                    <option value="Woman"> Woman </option>
                </select>

                <label>Select rol</label>
                <select className="form-control "  onChange={(event) => setRol(event.target.value)} required>
                    <option > Select Rol</option>
                    <option value="Visit"> Visit </option>

                    <option value="User"> User </option>
                </select>

        
                <label>Password</label>
                <input className='ipt' type="password" placeholder="Password" id="passwordRegister" required
                
                    onChange={(event) => setPassword(event.target.value)}
                />

                <label>Confirm Password</label>
                <input className='ipt' type="password" placeholder="Password" id="passwordConfirmRegister" required
                
                    onChange={(event) => setPasswordConfirm(event.target.value)}
                />

                <button className="btnRegister" onClick={() => registerApi(name, lastName, username, gender, rol, password, passwordConfirm)}>Register</button>
               
            </form>
            
            <h4>You already have an account <b> <Link to="/login">log in here</Link> </b></h4>
        </div>
    )
}

export default Register;