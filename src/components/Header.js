import { NavLink, Link } from 'react-router-dom';
import '../css/Header.css';
import Logo from '../img/Library (3).png';


const Header = () => (
    
    <div className='conataierHeader'>
        <header className="header sticky sticky--top js-header">
            <div className="grid">
                <nav className="navigation">
                    <ul className="navigation__list navigation__list--inline">
                        <div className="containerLogo">
                            <Link className="navbar-logo" to="/">
                                <img alt="logo"  src={Logo} />
                            </Link>
                        </div>
                        <li className="navigation__item"><NavLink className="active navigation__link " to="/"><p>Home</p></NavLink></li>
                        <li className="navigation__item"><NavLink className="active navigation__link" to="/books" ><p>Books</p></NavLink></li>
                        <li className="navigation__item"><NavLink className="active navigation__link" to="/offers"><p>Offers</p></NavLink></li>
                        <li className="navigation__item"><NavLink className="active navigation__link" to="/aboutUs"><p>About</p></NavLink></li>
                        <li className="navigation__item"><NavLink className="active navigation__link" to="/contact"><p>Contact</p></NavLink></li>
                        <li className="navigation__item"><NavLink className="active navigation__link" to="/register"><p>Register</p></NavLink></li>
                        <li className="navigation__item"><NavLink className="active navigation__link" to="/login"><p>Login</p></NavLink></li>
                    </ul>
                </nav>
            </div>
        </header>
    </div>

);

export default Header;