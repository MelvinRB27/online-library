import '../css/books.css';
import Aside from '../components/Aside';
import BookCard from '../cards/BookCard';
import SearchB from '../cards/SearchB';

const Books = () => (
    <div className="conataierBooks">
        <Aside/>
        <div className='containerDivBooks'>
            <h2 className='titlePage'><b>BOOKS</b></h2>
            <SearchB/>
            <BookCard/>
        </div>
    </div>
    
)

export default Books;