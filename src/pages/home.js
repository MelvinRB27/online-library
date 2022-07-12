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


            </div>

        </div>
    )
}


export default Home;