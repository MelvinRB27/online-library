import '../css/Footer.css'
import Logo from '../img/Library (3).png';
import Nortic from '../img/A5ReglaNortic.png';

import { Link } from 'react-router-dom';

const Footer = () => (
    
    <div className="containerFooter">
        <footer className="footer-distributed">

            <div className="footer-left">

                <Link className="footer-logo" to="/">
                    <img  alt="logo"  src={Logo} />
                </Link>

                <p className="footer-company-name"> © 2022 Library MJ</p>
            </div>

            <div className="footer-center">

                <div>
                    <i className="fa fa-map-marker"></i>
                    <p>Santo Domingo, Dominican Republic</p>
                </div>

                <div>
                    <i className="fa fa-phone"></i>
                    <p>+1 809-000-0000</p>
                </div>

                <div>
                    <i className="fa fa-envelope"></i>
                    <p><a href="mailto:support@LibraryMJ.com">LibraryMJ.RD@gmail.com</a></p>
                </div>

            </div>

            <div className="footer-right">

                <p className="footer-company-about">
                    <span>About the company</span>

                    <b>Library MJ</b> is an online library that is responsible 
                    for providing different types of books, so that users can download and share them.

                    <br/>
                    <br/>

                    We are characterized by the good content and services that our users can enjoy day after day.
                </p>

                <br/>

            </div>

            <div className="footer-right">
                
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

                <br/>
                
                <p>© 2022 ALL RIGHTS RESERVED </p>
                <img  alt="logo"  src={Nortic} />
            </div>

        </footer>
    </div>
);

export default Footer;