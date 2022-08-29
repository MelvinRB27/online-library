import '../css/aboutUs.css';
import MelvinPerfil from '../img/MelvinPerfil2.jpg';
import JosePerfil from '../img/JosePerfil.jpg';
import aboutName from '../img/about.png'

const AboutUs = () => (
    <div className="mainAboutUs">
        <div className='titlePage' > <img alt='book' src={aboutName} data-aos="zoom-in-up"/> </div>
        
        <div className="containerAboutUs" data-aos="fade-right">
            <div className="containerParagraph">
                <p>
                <b>Library MJ</b> is an online library that is responsible 
                    for providing different types of books, so that users can download and share them.

                <br/>
                <br/>

                We are characterized by the good content and services that our users can enjoy day after day.
                </p>
            </div>    
        </div>   

        <br/>

        <div className="ctnInfCEOS" data-aos="fade-right">
            <div className="containerPhotoMelvin">
                <div className='containerPerfil'>
                    <img src={MelvinPerfil} alt="Perfil Melvin"/>
                </div>

                <div className="containerNameMelvin">
                    <h5 className="footer-company-about"> Melvin Ruiz Batista </h5>
                    
                    <p className="footer-company-about"> 
                        Software developer with knowledge in Java, c#, 
                        Python, JavaScript, GO, Vue.js, React HTML. 
                        I have worked several projects as Frontend, also with the Backend. 
                    </p>
                </div>

            
                <div className="iconPerfil">
                    <a href="https://www.linkedin.com/in/melvin-ruiz-batista-92889b153/" target="_blank" rel='noreferrer'><i className="fab fa-linkedin"></i></a>
                    <a href="https://github.com/MelvinRB27" target="_blank" rel='noreferrer'><i className="fab fa-github"></i></a>
                </div>

            </div>

            <div className="containerPhotoJose" data-aos="fade-up">
                <div className='containerPerfil'>
                    <img src={JosePerfil} alt="Perfil Melvin"/>
                </div>

                <div className="containerNameMelvin">
                    <h5 className="footer-company-about"> José Augusto García Viguera </h5>
                    
                    <p className="footer-company-about"> 
                        Software developer with knowledge in Java, c#, 
                        JavaScript, React HTML. 
                        I have worked several projects as Frontend, also with the Backend. 
                    </p>
                </div>

            
                <div className="iconPerfil">
                <a href="https://www.linkedin.com/in/jose-augusto-garcia-viguera-945411223/" target="_blank" rel='noreferrer'><i className="fab fa-linkedin"></i></a>
                <a href='https://github.com/JoseGarcia233' target="_blank" rel='noreferrer'><i className="fab fa-github"></i></a>
                </div>

            </div> 

        </div>
        
    </div>
);

export default AboutUs;