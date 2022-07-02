import '../css/login.css';

import {Link} from 'react-router-dom';
import Logo from '../img/Library (3).png';

const Login = () => (
    <div className="loginContainer">
        <h2>Login Here</h2>
        <div className="backgroundFormLogin">
            <div className="shape"></div>
            <div className="shape"></div>
        </div>
        <form className='formLogin'>

            <img src={Logo} alt="Logo" />

            <label htmlFor="username">Username</label>
            <input type="text" placeholder="Email or Phone" id="username"/>

            <label htmlFor="password">Password</label>
            <input type="password" placeholder="Password" id="password"/>

            <button className='btnLogin'>Log In</button>
            <div className="socialLogin">
                <div className="go"><i className="fab fa-google"></i>  Google</div>
                <div className="fb"><i className="fab fa-facebook"></i>  Facebook</div>
            </div>
        </form>

        <h4>Don't have an account yet? , <b> <Link to="/register">register here</Link> </b> </h4>
    
    </div>
   
);

export default Login;