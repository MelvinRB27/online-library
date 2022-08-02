import "../css/pageNotFound.css"
import {Link} from 'react-router-dom'

const PageNotFound = () => {
    return(
        <div className="containerPageNotFound">
            
            <div className="ctnPNF">
                <p>
                    Page 
                    <div className="spinerNotFound"> 
                        <h2>4<b>0</b>4</h2>
                        <h6>ERROR</h6>

                    </div>
                    Not Found
                </p>
            </div>
            <div className="linkHOME">
                <p>
                This url is not valid check or go to <Link to="/">HOME</Link>

                </p>
            </div>
        </div>
    )
}

export default PageNotFound;