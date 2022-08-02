/* eslint-disable jsx-a11y/anchor-has-content */
import '../css/books.css';
import BookCard from '../cards/BookCard';
import bookName from '../img/books.png'

import {useNavigate} from 'react-router-dom';
import { useEffect } from 'react';

import ValidateToken from '../js/validateToken';

import Spinner from '../components/Spinner';

// import useFetch from '../hooks/useFetch';
import apiAJAX from '../hooks/apiAJAX';

import Swal from 'sweetalert2';


const Books = ({ url, title, } ) => {

    const [book, error] = apiAJAX(url);
    const [errorToken] = ValidateToken()

    const userData = JSON.parse(window.localStorage.getItem('userData'))

    function deleteBook(id) {
        var x = document.getElementById(id);
        if (x.style.display === "none") {
            x.style.display = "block";
        } else {
            x.style.display = "none";
        }
    }

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
        <div className="spinnerLoading">
            <p>An error occurred while trying to connect to the server</p>
            <Spinner />
        </div>
    )}

    return ( 
        <div className="conataierBooks">

            <div className='containerDivBooks'>
                {title && <div className='titleBOOK'> <div className='titlePage' > <img alt='book' src={bookName}/> </div> </div>}
                
                {book.length === 0 && 
                    <Spinner />
                }
                {
                    book.map(({
                        ID,
                        author,
                        title,
                        publisher_date,
                        pages,
                        cover,
                        url_details,
                        url_download
                    }) => {

                        return(
                            
                            <div className="bookCardContainer" id={ID} key={ID}>
                                <BookCard 
                                    author={author}
                                    title={title}
                                    age={publisher_date}
                                    pages={pages}
                                    cover={cover}
                                />
                                <div className='btns'>
                                    <a href={url_download} target='_blank' rel="noreferrer" className="btn btn-primary">DOWNLOAD</a>
                                    <a href={url_details} target='_blank' rel="noreferrer" className="btn btn-success">DETAILS</a>
                                    {userData.data.roles === "Admin" ?
                                    (
                                        <button className='btn btn-danger' onClick={() => deleteBook(ID)} >Delete</button>

                                    ) : <></>

                                    }

                                </div>
                            </div>
                        )             
                    })

                }
                        
            </div>
        </div>
    )
    

}

export default Books;