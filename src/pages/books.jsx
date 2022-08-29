/* eslint-disable jsx-a11y/anchor-has-content */
import '../css/books.css';
import BookCard from '../cards/BookCard';
import bookName from '../img/books.png'

import {Link, useNavigate} from 'react-router-dom';
import { useEffect } from 'react';

import ValidateToken from '../js/validateToken';

import Spinner from '../components/Spinner';

import useApiPublic from '../hooks/useApiPublic';

import Swal from 'sweetalert2';


const Books = ({ url, title, } ) => {

    const [book, error] = useApiPublic(url);

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
                {title && <div className='titleBOOK'> <div className='titlePage' > <img alt='book' src={bookName} data-aos="zoom-in-up"/> </div> </div>}
                
                {book.length === 0 && 
                    <Spinner />
                }
                {
                    book.map(({
                        id,
                        volumeInfo
                    }) => {

                        let cover;
                        let confirm = volumeInfo.imageLinks
                        if (confirm !== undefined) {
                            cover = volumeInfo.imageLinks.smallThumbnail
                        }else{
                            cover = bookName
                        }
                        return(
                            <div className="bookCardContainer" data-aos="zoom-out-up" key={id} id={id}>
                                
                                <BookCard 
                                    author={volumeInfo.authors}
                                    title={volumeInfo.title}
                                    age={volumeInfo.publishedDate}
                                    pages={volumeInfo.pageCount}
                                    cover={cover}
                                />
                                <div className='btns'>
                                    <a href={volumeInfo.canonicalVolumeLink} target='_blank' rel="noreferrer" className="btn btn-primary">Get book</a>
                                    <Link to={`/detail-book/${id}`}  className="btn btn-success">Details </Link>
                                    {userData.data.Rol === "Admin" ?
                                    (
                                        <button className='btn btn-danger' onClick={() => deleteBook(id)} >Delete</button>

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