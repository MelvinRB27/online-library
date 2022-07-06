import "../css/Aside.css";
import { Link } from 'react-router-dom'

const Aside = () => (
  <div className="containerAside">
    <aside className="cold-m-3 hidden-xs hidden-sm">
        
        <div className="list-group">
            <h4 className="list-group-item active">CATEGORY</h4>
            <Link to="?offer_like=true" className="list-group-item ">
                <i className="fa fa-book fa-1x"></i>
                EDUCATION
            </Link>
            <Link to="?category_like=lenguages" className="list-group-item">
                <i className="fa fa-book fa-1x"></i>
                LENGUAGES
            </Link>
            <Link to="?category_like=electronics" className="list-group-item">
                <i className="fa fa-book fa-1x"></i>
                ELECTRONICS
            </Link>
            <Link to="?category_like=philosophy" className="list-group-item">
                <i className="fa fa-book fa-1x"></i>
                PHILOSOPHY
            </Link>
            <Link to="?category_like=geography" className="list-group-item">
                <i className="fa fa-book fa-1x"></i>
                GEOGRAPHY
            </Link>
            <Link to="?category_like=history" className="list-group-item">
                <i className="fa fa-book fa-1x"></i>
                HISTORY
            </Link>
            <Link to="?category_like=developer" className="list-group-item">
                <i className="fa fa-book fa-1x"></i>
                WEB DEVELOPER
            </Link>
            <Link to="?category_like=control-version" className="list-group-item">
                <i className="fa fa-book fa-1x"></i>
                CONTROL VERSION
            </Link>
            <Link to="?category_like=3d-design" className="list-group-item">
                <i className="fa fa-book fa-1x"></i>
                3D DESIGN
            </Link>
            <Link to="?category_like=database" className="list-group-item">
                <i className="fa fa-book fa-1x"></i>
                DATABASE
            </Link>
        </div>
    </aside>
  </div>
);

export default Aside;
