import "../css/detailBook.css"
import bookName from '../img/books.png'

import React from 'react'
import GetDetail from '../hooks/apiDatilBook'
import ValidateToken from '../js/validateToken';
import {useNavigate} from 'react-router-dom';

import { useEffect } from 'react';
import Swal from 'sweetalert2';
import Spinner from '../components/Spinner';


import { useParams } from 'react-router-dom';

const DetailB = () => {

    const { id } = useParams();
    // eslint-disable-next-line no-unused-vars
    const [book, error] = GetDetail(id)

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

    //this is for validate if the book have a cover, if not have a cover add for default
    let cover;
    if( book.length === 0){
        return (<Spinner/>) 
     }else{
        if (book.volumeInfo.hasOwnProperty("imageLinks")) {
            cover = book.volumeInfo.imageLinks.smallThumbnail
        }else{
            cover = bookName
        }
     }
 
    return (
        <div className="containerBookDitals" data-aos="zoom-out-right">
            {
                book.length === 0 ? (<Spinner/>) :

                (
                <div className="divDetails" key={book.id}>
                    <div className="cntImgBook">
                        <img src={cover} alt="cover" />
                    </div>

                    <div className="cntDetailsInfor">
                        <h4>Information:</h4>

                        <h5><b>Author: </b>{book.volumeInfo.authors}</h5>
                        <h5><b>Title: </b>{book.volumeInfo.title}</h5>
                        <h5><b>Publisher date: </b>{book.volumeInfo.publishedDate}</h5>
                        <h5><b>Pages: </b>{book.volumeInfo.pageCount}</h5>
                        <h5><b>Language: </b>{book.volumeInfo.language}</h5>

                        {book.volumeInfo.categories === undefined ? (<></>):(
                            <>
                            
                                <h4>Category:</h4>
                                <h5>{book.volumeInfo.categories}</h5>
                            </>

                        )}

                        <a href={book.volumeInfo.canonicalVolumeLink} target="_blank" className="btn btn-primary" rel="noreferrer">Get book</a>

                    </div>
                </div>            
                )
            }

            
        </div>
    )
}
export default DetailB;