import { NavLink } from 'react-router-dom';

const NavBar = () => (
    <div className="w3-top">
        <div className="w3-bar w3-red w3-card w3-left-align w3-large">
            <ul>
                <li><NavLink to="/">Home</NavLink></li>
                <li><NavLink to="/books">Books</NavLink></li>
                <li><NavLink to="/offers">Offers</NavLink></li>
                <li><NavLink to="/contact">Contact</NavLink></li>
                <li><NavLink to="/about">About Us</NavLink></li>
            </ul>
        </div>
    </div>
)

export default NavBar;