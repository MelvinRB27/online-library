import '../css/offers.css';
import Books from './books';


const Offers = () => (
    <>
        <h2 className='titlePage'><b>OFFERS</b></h2>
        <div className='ctnBookHome'>
                <Books url="books?offer_like=true"/>
            </div>
    </>
)

export default Offers;