import "../css/Banner.css";
import imgBanner from "../img/R.png";
import homeName from  '../img/home.png'

import { Link } from "react-router-dom";
const Banner = ({ login }) => (
    <div className="ctnBanner">
        <div className='titlePageHome' > <img alt='book' src={homeName} data-aos="zoom-in-up"/> </div>
    
        <div className="bannerContainer">

            {login ? (
                <>
                    <div className="responsive-banner first-login" data-aos="zoom-out-up">
                    <div className="container-envelope">
                        <img className="IMGBanner" src={imgBanner} alt="Logo" />
                        <div className="col-xs-12">
                        <p>Having you as our member fills us with joy, thank you for trustingus</p>
                        </div>
                    </div>
                    </div>

                    <div className="responsive-banner second-login" data-aos="zoom-out-left">
                    <div className="container-envelope">
                        <img className="IMGBanner" src={imgBanner} alt="Logo" />
                        <div className="col-xs-12">
                        <p>Share your best reading moments with your friends</p>
                        </div>
                    </div>
                    </div>

                    <div className="responsive-banner third-login" data-aos="zoom-out-down">
                    <div className="container-envelope">
                        <img className="IMGBanner" src={imgBanner} alt="Logo" />
                        <div className="col-xs-12">
                        <p>
                            Take advantage and get today's offers, and the most recommended
                            books by our users
                        </p>
                        
                        </div>
                    </div>
                    </div>
                </>
            ): (
                <>
                    <div className="responsive-banner first">
                    <div className="container-envelope" data-aos="zoom-out-up">
                        <img className="IMGBanner" src={imgBanner} alt="Logo" />
                        <div className="col-xs-12">
                            <p>Log in and keep enjoying your great benefits of reading</p>
                            <Link to="/login" className="more-link"> Login </Link>
                        </div>
                    </div>
                    </div>

                    <div className="responsive-banner second" data-aos="zoom-out-left">
                    <div className="container-envelope">
                    <img className="IMGBanner" src={imgBanner} alt="Logo" />
                    <div className="col-xs-12">
                        <p>Join our fun group of readers</p>
                        <Link to="/register" className="more-link">
                        Register
                        </Link>
                    </div>
                    </div>
                    </div>

                    <div className="responsive-banner third" data-aos="zoom-out-down">
                    <div className="container-envelope">
                    <img className="IMGBanner" src={imgBanner} alt="Logo" />
                    <div className="col-xs-12">
                        <p>
                        Take advantage and get today's offers, and the most recommended
                        books by our users
                        </p>
                        <Link to="/offers" className="more-link">
                        Offers
                        </Link>
                    </div>
                    </div>
                    </div>
                </>
            )

            }

            <div className="link-containerBanner">
            <Link to="/books" className="more-link">
                Visit our books page
            </Link>
            </div>
        </div>
    </div>
);

export default Banner;
