import '../css/bookCard.css';

const BookCard = ({author, title, age, pages, cover}) => {
    const userData = JSON.parse(window.localStorage.getItem('userData'))
    console.log(userData.data.roles)
    return(
        <div>
            <div id="containerCardBook">	
                <div className="product-image">
                    <img src={cover} alt=""/>
                    <div className="info">
                        <h2> Description</h2>
                        <ul>
                            <li><strong>Title: </strong>{title}</li>
                            <li><strong>Author: </strong>{author}</li>
                            <li><strong>Pages: </strong>{pages}</li>
                            <li><strong>Age: </strong>{age}</li>
                        </ul>
                    </div>
                </div>
                {userData.data.roles === "Admin" ?
                    (
                        <>
                            <button className='btn btn-primary'>Edit</button>
                            <button className='btn btn-danger'>Delete</button>
                        </>

                    ) : <></>

                    }
            </div>
        </div>
    )
}

export default BookCard;