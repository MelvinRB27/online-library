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

      <div className="containerLogoRD col-lg-3 col-md-3 d-none d-sm-none d-lg-block">
        <div className="eletop float-right">
          <div className="escudo">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/26/Coat_of_arms_of_the_Dominican_Republic.svg/1024px-Coat_of_arms_of_the_Dominican_Republic.svg.png"
              alt="Escudo de la República Dominicana"
            />
            República Dominicana
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
                  placeholder="Enter your search"
                />
                <div className="input-group-btn">
                  <button className="btn btn-primary "
                    type="submit"
                  >
                    <i className="fa fa-search" aria-hidden="true"></i>
                  </button>
                </div>
              </span>
            </form>
          </div>
          <div className="buscador menuTop">
              <Link className="linkHeader" to="/">Home</Link>
              <Link className="linkHeader co"to="/contact">Contact</Link>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Header;
