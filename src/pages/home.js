import '../css/home.css';

import Books from './books';
import Banner from '../components/Banner'
const Home = () => (
    <div className="containerHome">
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