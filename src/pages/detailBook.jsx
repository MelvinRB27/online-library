import "../css/detailBook.css"

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

    return (
        <div className="containerBookDitals">
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
                    content,
                    language,
                    categories,
                    url_download
                }) => {

                    return(
                        <div className="divDetails" key={ID}>
                            <div className="cntImgBook">
                                <img src={cover} alt="cover" />
                            </div>

                            <div className="cntDetailsInfor">
                                <h4>Information:</h4>

                                <h5><b>Author: </b>{author}</h5>
                                <h5><b>Title: </b>{title}</h5>
                                <h5><b>Publisher date: </b>{publisher_date}</h5>
                                <h5><b>Pages: </b>{pages}</h5>
                                <h5><b>Language: </b>{language}</h5>
                                <h4>Category:</h4>

                                {
                                categories.map(({
                                category_id,
                                name,
                                nicename
                                })=>{
                                return(
                                    <h5>{name}</h5>

                                )
                                })
                                
                                }
                            </div>

                            <div className="cntDescription">
                                <h4>Description:</h4>
                                <p className="col-md-15">
                                    {content}
                                </p>
                                
                                <a href={url_download} target="_blank" className="btn btn-primary" rel="noreferrer">Donwload</a>
                            </div>
                        </div>

                    )
                })

            }
        </div>
    )
}
export default DetailB;