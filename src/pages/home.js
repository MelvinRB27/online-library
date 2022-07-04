import '../css/home.css';
import BookCard from '../cards/BookCard';
import SearchB from '../cards/SearchB';
const Home = () => (
    <div className="containerHome">
        <div className='containerDivBooks'>
        <h2 className='titlePage'>WELCOME TO <b>LIBRARY MJ</b> </h2>
        <SearchB/>
        <BookCard/>
        </div>

    </div>
)

export default Home;