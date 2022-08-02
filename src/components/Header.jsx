import "../css/Header.css";
import Logo from "../img/Library (3).png";
import NameLogo from '../img/NameLogo.png';

import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="containerHeader">
        <div className="logo">
          <Link className="" to="/">
            <img alt="logo" src={Logo} />
          </Link>
      </div>

      <div className="containerNameLogo">
          <img alt='nameLogo' src={NameLogo} />
      </div>

      {/* <div className="containerLogoRD col-lg-3 col-md-3 d-none d-sm-none d-lg-block">
        <div className="eletop float-right">
          <div className="escudo">
            <img
              src="https://ogtic.gob.do/wp-content/themes/optic/img/rd.svg"
              alt="Escudo de la República Dominicana"
            />
          </div>
          <div className="search">
            <form
              className="search"
              method="get"
              action="/books"
              role="search"
            >
              <span className="input-la input-group">
                <input
                  className="search-input form-control"
                  aria-label="Ingresa tu búsqueda"
                  type="search"
                  required=""
                  name="s"
                  placeholder="Ingresa tu búsqueda"
                />
                <div className="input-group-btn">
                  <button
                    type="submit"
                  >
                    <i className="fa fa-search" aria-hidden="true"></i>
                  </button>
                </div>
              </span>
            </form>
          </div>
          <div className="buscador menuTop">
            <ul>
              <li
                id="menu-item-7"
                className="menu-item menu-item-type-post_type menu-item-object-page menu-item-home menu-item-7"
              >
                <Link to="/">Inicio</Link>
              </li>
              <li
                id="menu-item-7"
                className="menu-item menu-item-type-post_type menu-item-object-page menu-item-home menu-item-7"
              >
                <Link to="/">Mapa del sitio</Link>
              </li>
              <li
                id="menu-item-149"
                className="menu-item menu-item-type-post_type menu-item-object-page menu-item-149"
              >
                <Link to="/contact">Contacto</Link>
              </li>
            </ul>
          </div>
        </div>
      </div> */}
    </div>
  );
};
export default Header;
