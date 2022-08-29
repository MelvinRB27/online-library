import '../css/offers.css';
import Books from './books';
import offersNAME from '../img/offers.png'


const Offers = () => (
    <div className="ctnOffers">
        <div className='titleBOOK'> <div className='titlePage' > <img alt='book' src={offersNAME}/> </div> </div>
        <br/>
        <div className='ctnBookHome'>
            <Books url="?most_viewed "/>
        </div>
    </div>
)

export default Offers;