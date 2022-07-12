import '../css/books.css';
import Aside from '../components/Aside';
import BookCard from '../cards/BookCard';

import {useNavigate} from 'react-router-dom';
import { useEffect } from 'react';

import SearchB from '../cards/SearchB';
import ValidateToken from '../js/validateToken';

import Spinner from '../components/Spinner';

import useFetch from '../hooks/useFetch';
import Swal from 'sweetalert2';


const Books = ({ url, title } ) => {

    const [book, error] = useFetch(url);
    const [errorToken] = ValidateToken()

    const redirect = useNavigate()

    const alertError = (txt) => {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: txt,
            })
        }
    
    useEffect(() => {
        if (errorToken) {
            alertError("You must log in or create an account")
            return redirect('/login')
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[errorToken])
        
   
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
                {title && <SearchB/>}
                
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