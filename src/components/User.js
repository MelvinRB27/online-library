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
    const alertSuccess = (txt) => {
        Swal.fire({
        icon: 'success',
        title: 'Login success',
        text: txt,
        showConfirmButton: false,
        timer: 1500
    })}

    useEffect(() => {
        if (errorToken) {
            alertSuccess("You are already logged in")
            return redirect('/')
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[errorToken])

    const userData = JSON.parse(window.localStorage.getItem('userData'))
     let perfil;
     
     //This is to know the gender of the registered person 
     //and put an avatar according to their gender
     if (userData.data.gender === 'Woman') {
        perfil = AvatarWoman
     }else if (userData.data.gender === 'Men' && userData.data.name === 'Huascar'){
        perfil  = AvatarHuascar
     }else if (userData.data.gender === 'Men' && userData.data.name === 'José'){
        perfil  = AvatarJose
     }else if (userData.data.gender === 'Men' && userData.data.name === 'Melvin'){
        perfil  = AvatarMelvin
     }
     else perfil = AvatarMen

    
    return (

        <div className="cntInfoUser">
                <div className="col-lg-3 col-sm-6">
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
                            <h3><b>Name:</b> <br/> {userData.data.name}</h3>
                            <h3><b>Last Name:</b> <br/>  {userData.data.last_name}</h3>
                            <h3><b>Email:</b> <br/>  {userData.data.UserName}</h3>
                            <h3><b>Gender:</b> <br/>  {userData.data.gender}</h3>
                            <h3><b>Rol:</b> <br/>  {userData.data.roles}</h3>
                        </div>
                        <button className="btn btn-primary" onClick={() => redirect("/update_Register")} >EDIT INFO</button>
                    </div>

                </div>

        </div>

    )
}

export default UserPage;