import '../css/User.css'
import AvatarMen from '../img/avatars/AvatarMen.png'
import AvatarWoman from '../img/avatars/AvatarWoman.png'
import AvatarHuascar from '../img/avatars/AvatarHusacar.png'
import AvatarMelvin from '../img/avatars/AvatarMelvin.png'
import AvatarJose from '../img/avatars/AvatarJose.png'

import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import Swal from 'sweetalert2';
import ValidateToken from '../js/validateToken';


const UserPage = () => {
    const [errorToken] = ValidateToken()

    let redirect = useNavigate()

    //alert for  user
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

    const userData = JSON.parse(window.localStorage.getItem('userData'))
     let perfil;
     
     //This is to know the gender of the registered person 
     //and put an avatar according to their gender
     if (userData.data.Gender === 'Woman') {
        perfil = AvatarWoman
     }else if (userData.data.Gender === 'Men' && userData.data.Name === 'Huascar'){
        perfil  = AvatarHuascar
     }else if (userData.data.Gender === 'Men' && userData.data.Name === 'José'){
        perfil  = AvatarJose
     }else if (userData.data.Gender === 'Men' && userData.data.Name === 'Melvin'){
        perfil  = AvatarMelvin
     }
     else perfil = AvatarMen

    
    return (

        <div className="cntInfoUser" data-aos="fade-down-right">
                <div className="co">
                    <div className="card hovercard">
                        <div className="cardheader">

                        </div>
                        <div className="avatar">
                            <img alt="" src={perfil}/>
                        </div>
                        <div className="info">
                            <div className="title">
                                <a  href="/">Script Eden</a>
                            </div>
                            <div className="desc">Passionate designer</div>
                            <div className="desc">Curious developer</div>
                            <div className="desc">Tech geek</div>
                        </div>
                        
                        <div className="cntData">
                            <h3><b>Name:</b> <br/> {userData.data.Name}</h3>
                            <h3><b>Last Name:</b> <br/>  {userData.data.LastName}</h3>
                            <h3><b>Email:</b> <br/>  {userData.data.UserName}</h3>
                            <h3><b>Gender:</b> <br/>  {userData.data.Gender}</h3>
                            <h3><b>Rol:</b> <br/>  {userData.data.Rol}</h3>
                        </div>
                        <button className="btn btn-primary" onClick={() => redirect("/update_Register")} >EDIT INFO</button>
                    </div>
                </div>
        </div>

    )
}

export default UserPage;