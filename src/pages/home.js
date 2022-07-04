import '../css/home.css';
import BookCard from '../cards/BookCard';

const Home = () => (
    <div className="containerHome">
        <div className='containerDivBooks'>
        <h2 className='titlePage'>WELCOME TO <b>LIBRARY MJ</b> </h2>
        <BookCard/>
        </div>
    </div>
)

export default Home;