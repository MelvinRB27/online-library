import '../css/books.css';
import Aside from '../components/Aside';
import BookCard from '../cards/BookCard';
import Spinner from '../components/Spinner';

import useFetch from '../hooks/useFetch';
import apiAJAX from '../hooks/apiAJAX';
const Books = ({ url} ) => {

    const [book, error] = apiAJAX(url);

    if (error) { return (
        <>
            <p>An error occurred while trying to connect to the server</p>
            <Spinner />
        </>
    )}
    
    return (
        <div className="conataierBooks">
            <Aside/>
            <div className='containerDivBooks'>
                <h2 className='titlePage'><b>BOOKS</b></h2>
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