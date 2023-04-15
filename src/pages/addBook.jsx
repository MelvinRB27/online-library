import '../css/addBook.css';
import PostApi from '../hooks/usePost';

import {useNavigate} from 'react-router-dom';
import { useState } from 'react';

// import Swal from 'sweetalert2';

// import ValidateToken from '../js/validateToken';

const AddBook = () => {

    const [author, setAuthor] = useState()
    const [title, setTitle] = useState()
    const [publisher_date, setPublisher_date] = useState()
    const [pages, setPages] = useState()
    const [cover, setCover] = useState()
    const [pdf, setPdf] = useState()
   

    // const [errorToken] = ValidateToken()

    const userData = JSON.parse(window.localStorage.getItem('userData'))


    var dataJson = {
        "id": "",
        "author": author,
        "title": title,
        "publisher_date": publisher_date,
        "pages": pages,
        "cover": cover,
        "url_download": pdf
    }

    //redirect page
    let redirect = useNavigate()

    //alert for  user
    // const alertError = (txt) => {
    //     Swal.fire({
    //         icon: 'error',
    //         title: 'Oops...',
    //         text: txt,
    //         })
    //     }
    
    // useEffect(() => {
    //     if (errorToken) {
    //         alertError("You must log in or create an account")
    //         return redirect('/login')
    //     }
    // // eslint-disable-next-line react-hooks/exhaustive-deps
    // },[errorToken])

    const formSubmit = (e) => {
        e.preventDefault()
        PostApi(dataJson)
        return redirect('/books')

    };

    if (userData.data.Rol !== "Admin"){
        return <h1>"You are not an administrator, you cannot add a book"</h1>
    }

    return(
        <div className="ctnAddBook">
            
            <form className='formAddBook' onSubmit={formSubmit} data-aos="flip-up">

                <label htmlFor="Author">Author</label>
                <input type="text" placeholder="Author" id="Author" required
                
                onChange={(event) => setAuthor(event.target.value)}
                />

                <label htmlFor="Title">Title</label>
                <input type="text" placeholder="Title" id="Title" required
                
                onChange={(event) => setTitle(event.target.value)}
                />

                <label htmlFor="publisher_date">Publisher date</label>
                <input type="text" placeholder="Publisher date" id="publisher_date" required
                
                onChange={(event) => setPublisher_date(event.target.value)}
                />

                <label htmlFor="Pages">Pages</label>
                <input type="text" placeholder="Pages" id="Pages" required
                
                onChange={(event) => setPages(event.target.value)}
                />

                <label htmlFor="Cover">Ulr cover</label>
                <input type="text" placeholder="Url cover" id="Cover" required
                
                onChange={(event) => setCover(event.target.value)}
                />

                <label htmlFor="pdf">Link PDF</label>
                <input type="text" placeholder="Url pdf" id="pdf" required
                                
                onChange={(event) => setPdf(event.target.value)}
                />

                <button className='btnLogin'>Add book</button>

            </form>
        
        </div> 
    )
}
   
export default AddBook;