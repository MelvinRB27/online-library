import { NavLink, Link } from 'react-router-dom';
import '../css/Header.css';
import Logo from '../img/Library (3).png';


const Header = () => (
    
    <header className="header sticky sticky--top js-header">
            <div className="grid">
                <nav className="navigation">
                <ul className="navigation__list navigation__list--inline">
                    <div className="containerLogo">
                        <Link className="navbar-logo" to="/">
                            <img alt="logo"  src={Logo} />
                        </Link>
                    </div>
                    <li className="navigation__item"><NavLink className="active navigation__link " to="/"><b>Home</b></NavLink></li>
                    <li className="navigation__item"><NavLink className="active navigation__link" to="/books" ><b>Books</b></NavLink></li>
                    <li className="navigation__item"><NavLink className="active navigation__link" to="/offers"><b>Offers</b></NavLink></li>
                    <li className="navigation__item"><NavLink className="active navigation__link" to="/aboutUs"><b>About</b></NavLink></li>
                    <li className="navigation__item"><NavLink className="active navigation__link" to="/contact"><b>Contact</b></NavLink></li>
                    <li className="navigation__item"><NavLink className="active navigation__link" to="/register"><b>Register</b></NavLink></li>
                    <li className="navigation__item"><NavLink className="active navigation__link" to="/login"><b>Login</b></NavLink></li>
                </ul>
                </nav>
            </div>
    </header>
);

export default Header;