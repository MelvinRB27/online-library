import axios from 'axios';
import Swal from 'sweetalert2';


const UpdateRegister = (name, lastName, gender, rol, password, passwordConfirm) => { // this is for get Email localStorage
    const userData = JSON.parse(window.localStorage.getItem('userData'))
    //console.log(rol, gender)
    
    var FormData = require('form-data');
    var data = new FormData();

    data.append('nameUpdate', name);
    data.append('lastNameUpdate', lastName);
    data.append('usernameUpdate', userData.data.UserName);
    data.append('genderUpdate', gender);
    data.append('rolUpdate', rol);
    data.append('passwordUpdate', password);
    data.append('passwordConfirmUpdate', passwordConfirm);

     //alert
    const alertSuccess = (txt) => {
        Swal.fire({
        icon: 'success',
        title: 'Success update',
        text: txt,
        showConfirmButton: false,
        timer: 1500
    })}
    
    const alertError = (txt) => {
    Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: txt,
        })
    }

    var config = {
        method: 'put',
        url: 'http://localhost:8080/v1/update',
        headers: {
            "Access-Control-Allow-Origin": "*", 
            "Access-Control-Allow-Headers": 
            "access-control-allow-origin, access-control-allow-headers"
        },
        data : data
      };
      
      axios(config)
      .then(function (response) {

        //delete cookies 
        window.localStorage.removeItem("login-token")
        window.localStorage.removeItem("userData")
        
        //add cookies to new session of update
        window.localStorage.setItem("login-token", response.data.cookie);
        window.localStorage.setItem("userData", JSON.stringify(response.data));
        alertSuccess(response.data.message)
        window.location.href = '/user'
      })
      .catch(function (error) {
        console.log(error);
        alertError(error.response.data.message)
      });
}

export default UpdateRegister;