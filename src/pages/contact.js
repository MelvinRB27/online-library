import '../css/contact.css';

const Contact = () => (
    <>
        <h1 className='titlePage'><b>CONTACT</b></h1>

        <div className='contactNumber'>
            <h5>Phone <p>809-000-0000</p></h5>
        </div>

        <form className='formContact'>
            <label htmlFor="username">Username</label>
            <input type="text" placeholder="Name" id="username"/>

            <label htmlFor="email">Password</label>
            <input type="Email" placeholder="Email" id="email"/>

            <label htmlFor="textare">Your message</label>
            <textarea type="text"  id="textare"/>

            <button className='btnLogin'>Send message</button>
        </form>
    </>
)

export default Contact;