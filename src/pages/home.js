import '../css/home.css'
import Books from './books';
import Banner from '../components/Banner'
import ScrollToTop from "react-scroll-to-top";
const Home = () => (
    <div className="containerHome">
          <ScrollToTop />
        <div className='containerDivBooks'>
            {/* <h2 className='titlePage'>WELCOME TO <b>LIBRARY MJ</b> </h2> */}
            <Banner/>

            <div className='ctnBookHome'>
                <Books url="books?offer_like=true"/>

            </div>
           
        </div>
       
    </div>
)

export default Home;