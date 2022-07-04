import '../css/bookCard.css';
import {string, number} from 'prop-types';

const BookCard = ({author, title, age, pages, cover}) => {
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
            </div>
        </div>
    )
}

export default BookCard;