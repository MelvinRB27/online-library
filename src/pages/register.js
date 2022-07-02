import { Link } from 'react-router-dom';
import '../css/register.css';
import Logo from '../img/Library (3).png';

const Register = () => (
    <div className="registerContainer">
        <div className="backgroundFormRegister">
            <div className="shape"></div>
            <div className="shape"></div>
        </div>
        <h2><b>Register now</b>, to enjoy the best books online</h2>
        <form className="formRegister">
            <img src={Logo} alt="Logo" />

            <label hmtlFor="name">Name</label>
            <input type="text" placeholder="Name" id="name"/>

            <label htmlFor="lastName">Last name</label>
            <input type="text" placeholder="Last Name" id="lastName"/>

            <label hmtlFor="username">Username</label>
            <input type="text" placeholder="Email or Phone" id="username"/>

            <label hmtlFor="password">Password</label>
            <input type="password" placeholder="Password" id="password"/>

            <button className="btnRegister">Register</button>
            <div className="socialRegister">
                <div className="go"><i class="fab fa-google"></i>  Google</div>
                <div className="fb"><i class="fab fa-facebook"></i>  Facebook</div>
            </div>
        </form>
        
        <h4>You already have an account <b> <Link to="/login">log in here</Link> </b></h4>
    </div>
    
    
);

export default Register;