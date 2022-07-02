import "../css/Aside.css";

const Aside = () => (
  <div className="containerAside">
    <aside className="cold-m-3 hidden-xs hidden-sm">
        <h4>CATEGORY</h4>
        <div className="list-group">
            <button to="/book" className="list-group-item active">
                <i className="fa fa-book fa-1x"></i>
                EDUCATION
            </button>
            <button to="#" className="list-group-item">
                <i className="fa fa-book fa-1x"></i>
                LENGUAGES
            </button>
            <button to="#" className="list-group-item">
                <i className="fa fa-book fa-1x"></i>
                ELECTRONICS
            </button>
            <button to="#" className="list-group-item">
                <i className="fa fa-book fa-1x"></i>
                PHILOSOPHY
            </button>
            <button to="#" className="list-group-item">
                <i className="fa fa-book fa-1x"></i>
                GEOGRAPHY
            </button>
            <button to="#" className="list-group-item">
                <i className="fa fa-book fa-1x"></i>
                HISTORY
            </button>
            <button to="#" className="list-group-item">
                <i className="fa fa-book fa-1x"></i>
                WEB DEVELOPER
            </button>
            <button to="#" className="list-group-item">
                <i className="fa fa-book fa-1x"></i>
                CONTROL VERSION
            </button>
            <button to="#" className="list-group-item">
                <i className="fa fa-book fa-1x"></i>
                3D DESIGN
            </button>
            <button to="#" className="list-group-item">
                <i className="fa fa-book fa-1x"></i>
                DATABASE
            </button>
        </div>
    </aside>
  </div>
);

export default Aside;
