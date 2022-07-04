import '../css/books.css';
import Aside from '../components/Aside';
import BookCard from '../cards/BookCard';

import SearchB from '../cards/SearchB';

import Spinner from '../components/Spinner';

import useFetch from '../hooks/useFetch';
const Books = ({ url, title } ) => {

    const [book, error] = useFetch(url);

    if (error) { return (
        <>
            <p>An error occurred while trying to connect to the server</p>
            <Spinner />
        </>
    )}
    
    return (
        <div className="conataierBooks">
            {title && <Aside/>}
            <div className='containerDivBooks'>
                {title && <h2 className='titlePage'><b>BOOKS</b></h2>}
                <SearchB/>
                {book.length === 0 && 
                    <Spinner />
                }
                {
                    book.map(({
                        Id,
                        author,
                        title,
                        age,
                        pages,
                        cover
                    }) => {
                        return(
                            <div key={Id}>
                                <BookCard 
                                    author={author}
                                    title={title}
                                    age={age}
                                    pages={pages}
                                    cover={cover}
                                />
                            </div>
                        )                    
                    })

                }
            </div>
        </div>

    )
    
}

export default Books;