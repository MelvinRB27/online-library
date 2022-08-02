import '../css/contact.css';
import Logo from '../img/Library (3).png';
import contactName from '../img/contact.png'

const Contact = () => (
    <div className='containerContact'>
        <div className='titlePage' > <img alt='book' src={contactName}/> </div>
        <br/>

        <div className='contactNE'>
            <h5>Phone</h5>
            <p>809-000-0000</p>

            <h5>Email</h5>
            <p><a href="mailto:support@LibraryMJ.com">support@LibraryMJ.com</a></p>
        </div>
        <br/>
        <br/>
        <form className='formContact'>

            <img src={Logo} alt="Logo" />

            <label htmlFor="username">Username</label>
            <input type="text" placeholder="Name" id="username"/>

            <label htmlFor="email">Email</label>
            <input type="email" placeholder="Email" id="email"/>

            <label htmlFor="textare">Your message</label>
            <textarea type="text"  id="textare"/>

            <button className='btnLogin'>Send message</button>
        </form>
    </div>
)

export default Contact;