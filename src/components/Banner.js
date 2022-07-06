import '../css/Banner.css';
import imgBanner from '../img/R.png';

import { Link } from 'react-router-dom';
const Banner = () => (

    <div className="bannerContainer">

        <h1>WELCOME TO <b>LIBRARY MJ</b></h1>
        <div className="responsive-banner first">
            <div className="container-envelope">
                <img className='IMGBanner' src={imgBanner}  alt='Logo'/>
                <div className="col-xs-12">
                    <p>Log in and keep enjoying your great benefits of readings</p>
                    <Link  to="/login" className="more-link">Login</Link>
                </div>
            </div>
        </div>

        <div className="responsive-banner second">
            <div className="container-envelope">
                
                <img className='IMGBanner' src={imgBanner}  alt='Logo'/>
                <div className="col-xs-12">
                <p>Join our fun group of readers</p>
                <Link  to="/register" className="more-link">Register</Link>
                </div>
            </div>
        </div>

        <div className="responsive-banner third">
            <div className="container-envelope">
                <img className='IMGBanner'src={imgBanner} alt='Logo' />
                <div className="col-xs-12">
                <p>Take advantage and get today's offers, and the most recommended books by our users</p>
                <Link  to="/offers" className="more-link">Offers</Link>
                </div>
            </div>
        </div>
        <div className="link-containerBanner">
            <Link  to="/books" className="more-link">Visit our books page</Link>
        </div>

    </div>
)

export default Banner;