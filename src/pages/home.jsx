import '../css/home.css'
import Books from './books';
import Banner from '../components/Banner'
import ScrollToTop from "react-scroll-to-top";

import ValidateToken from '../js/validateToken';
const Home = () => {

    const [errorToken] = ValidateToken()

    return(
        <div className="containerHome">
              <ScrollToTop />
            <div className='containerDivBooks'>
                {
                    !errorToken ? (
                    <> 
                        <Banner login/> 
                        <div className='ctnBookHome'>
                            <Books url="books?offer_like=true"/>
                        </div> </>) 
                        : 
                    (<Banner />)
                }   
                <br/>
                <br/>
                <h2>Social networks</h2>
                <div className='iconHome'>
                    <a href='/'><i className="fa fa-facebook"></i></a>
                    <a href='/'><i className="fa fa-instagram"></i></a>
                    <a href='/'><i className="fa fa-twitter"></i></a>
                </div>
                    
            
            </div>

        </div>
    )
}


export default Home;