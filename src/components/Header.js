import { NavLink, Link } from 'react-router-dom';
import '../css/Header.css';
import Logo from '../img/Library (3).png';
import AvatarMen from '../img/avatars/AvatarMen.png'
import AvatarWoman from '../img/avatars/AvatarWoman.png'
import AvatarHuascar from '../img/avatars/AvatarHusacar.png'
import AvatarMelvin from '../img/avatars/AvatarMelvin.png'
import AvatarJose from '../img/avatars/AvatarJose.png'

import ButtonLogout from '../components/ButtonLogout';
import ValidateToken from '../js/validateToken';

const Header = () => {
    const [errorToken] = ValidateToken()

    const dataUser = JSON.parse(window.localStorage.getItem('userData'))
    let perfil;
     
    //This is to know the gender of the registered person 
    //and put an avatar according to their gender
    if (!errorToken){
        
        if (dataUser.data.gender === 'Woman') {
            perfil = AvatarWoman
         }else if (dataUser.data.gender === 'Men' && dataUser.data.name === 'Huascar'){
            perfil  = AvatarHuascar
         }else if (dataUser.data.gender === 'Men' && dataUser.data.name === 'José'){
            perfil  = AvatarJose
         }else if (dataUser.data.gender === 'Men' && dataUser.data.name === 'Melvin'){
            perfil  = AvatarMelvin
         }
         else perfil = AvatarMen
    }
    
    return (    
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
                           {
                           
                           errorToken &&  <><li className="navigation__item"><NavLink className="active navigation__link" to="/register"><p>Register</p></NavLink></li>
                             <li className="navigation__item"><NavLink className="active navigation__link" to="/login"><p>Login</p></NavLink></li>
                            
                             </>}
                            { !errorToken &&
                                <>
                                    <div className="infoUser">

                                        <li className="name navigation__item"><NavLink className="active navigation__link" to="/user"><p>{dataUser.data.name}</p></NavLink></li>
                                        <div className="avatar">
                                            <img alt="" src={perfil}/>
                                        </div>
                                        <h4>{dataUser.data.roles}</h4>

                                    </div>
                                    <ButtonLogout />
                                </>
                            
                            }
                        </ul>
                    </nav>
                </div>
            </header>
        </div>
    
    );
}
    

export default Header;