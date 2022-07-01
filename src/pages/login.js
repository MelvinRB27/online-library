import '../css/login.css';

import {Link} from 'react-router-dom';

const Login = () => (
    <div className="loginContainer">
        <h1>Welcome</h1>
        <div className="backgroundFormLogin">
            <div className="shape"></div>
            <div className="shape"></div>
        </div>
        <form className='formLogin'>
            <h3>Login Here</h3>

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