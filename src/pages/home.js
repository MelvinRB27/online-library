import '../css/home.css';

import Books from './books';
const Home = () => (
    <div className="containerHome">
        <div className='containerDivBooks'>
        <h2 className='titlePage'>WELCOME TO <b>LIBRARY MJ</b> </h2>
        <Books url="books?offer_like=true"/>
        </div>

    </div>
)

export default Home;