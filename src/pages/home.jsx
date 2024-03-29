import '../css/home.css'
import Banner from '../components/Banner'

import ValidateToken from '../js/validateToken';
const Home = () => {

    const [errorToken] = ValidateToken()

    return(
        <div className="containerHome">
            <div className='containerDivBooks'>
                {
                    !errorToken ? (
                    <> 
                        <Banner login/> 
                    </>) 
                        : 
                    (<Banner />)
                }   
                <br/>
                <br/>
                <h2>Social networks</h2>
                <div className='iconHome'>
                    <a href='/' target="_blank" rel="noreferrer"><i className="fa fa-facebook" data-aos="fade-right"></i></a>
                    <a href='/' target="_blank" rel="noreferrer"><i className="fa fa-instagram" data-aos="fade-up"></i></a>
                    <a href='/' target="_blank" rel="noreferrer"><i className="fa fa-twitter" data-aos="fade-left"></i></a>
                </div>     
            </div>
        </div>
    )
}

export default Home;