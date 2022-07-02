import '../css/contact.css';
import Logo from '../img/Library (3).png';

const Contact = () => (
    <div className='containerContact'>
        <h2 className='titlePage'><b>Contact</b></h2>

        <div className='contactNE'>
            <h5>Phone</h5>
            <p>809-000-0000</p>

            <h5>Email</h5>
            <p><a href="mailto:support@LibraryMJ.com">support@LibraryMJ.com</a></p>

        </div>

        <form className='formContact'>

            <img src={Logo} alt="Logo" />

            <label htmlFor="username">Username</label>
            <input type="text" placeholder="Name" id="username"/>

            <label htmlFor="email">Password</label>
            <input type="Email" placeholder="Email" id="email"/>

            <label htmlFor="textare">Your message</label>
            <textarea type="text"  id="textare"/>

            <button className='btnLogin'>Send message</button>
        </form>
    </div>
)

export default Contact;