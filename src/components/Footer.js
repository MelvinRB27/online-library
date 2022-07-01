import '../css/Footer.css'
import Logo from '../img/Library (3).png';

import { NavLink, Link } from 'react-router-dom';

const Footer = () => (

    <footer className="footer-distributed">

        <div className="footer-left">

            <Link className="footer-logo" to="/">
                <img  alt="logo"  src={Logo} />
            </Link>

            <p className="footer-company-name">Library MJ © 2022</p>
        </div>

        <div className="footer-center">

            <p className="footer-links">

                <NavLink className="active navigation__link " to="/">Home</NavLink>
                <NavLink className="active navigation__link" to="/books" >Books</NavLink>
                <NavLink className="active navigation__link" to="/offers">Offers</NavLink>
                <NavLink className="active navigation__link" to="/aboutUs">About</NavLink>
                <NavLink className="active navigation__link" to="/contact">Contact</NavLink>
                <NavLink className="active navigation__link" to="/register">Register</NavLink>
                <NavLink className="active navigation__link" to="/login">Login</NavLink>

            </p>

            <div>
                <i className="fa fa-map-marker"></i>
                <p><span>444 S. Cedros Ave</span> Solana Beach, California</p>
            </div>

            <div>
                <i className="fa fa-phone"></i>
                <p>+1.555.555.5555</p>
            </div>

            <div>
                <i className="fa fa-envelope"></i>
                <p><a href="mailto:support@company.com">support@LibraryMJ.com</a></p>
            </div>

        </div>

        <div className="footer-right">

            <p className="footer-company-about">
                <span>About the company</span>

                <b>Library MJ</b> is an online library that is responsible for 
                providing different types of books, so that users can rent, buy and share it.

                <br/>
                <br/>

                We are characterized by the good content and services that our users can enjoy day after day.
            </p>

            <br/>

            <p className="footer-company-about">
                <span>CEOS</span>
            </p>

    
            <p className="footer-company-about">
                Melvin Ruiz Batista
            </p>

            <div className="iconCEO">
                <a href="https://www.linkedin.com/in/melvin-ruiz-batista-92889b153/" target="_blank" rel='noreferrer'><i className="fab fa-linkedin"></i></a>
                <a href="https://github.com/MelvinRB27" target="_blank" rel='noreferrer'><i className="fab fa-github"></i></a>
            </div>

            <p className="footer-company-about">
                José Augusto García Viguera
            </p>
               
            <div className='iconCEO'>
                <a href="https://www.linkedin.com/in/jose-augusto-garcia-viguera-945411223/" target="_blank" rel='noreferrer'><i className="fab fa-linkedin"></i></a>
                <a href='https://github.com/JoseGarcia233' target="_blank" rel='noreferrer'><i className="fab fa-github"></i></a>
            </div>

        </div>

	</footer>
);

export default Footer;