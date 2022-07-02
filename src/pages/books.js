import '../css/books.css';
import Aside from '../components/Aside';
import BookCard from '../cards/BookCard';

const Books = () => (
    <div className="conataierBooks">
        <Aside/>
        <div className='containerDivBooks'>
            <h2 className='titlePage'><b>BOOKS</b></h2>
            <BookCard/>
        </div>
    </div>
    
)

export default Books;