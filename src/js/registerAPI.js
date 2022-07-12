import axios from 'axios';
import Swal from 'sweetalert2';


const RegisterApi = (name, lastName, userName, gender, rol, password, passwordConfirm) => {
    console.log("BUENOOO",gender, rol)

    var FormData = require('form-data');
    var data = new FormData();
    data.append('nameRegister', name);
    data.append('lastNameRegister', lastName);
    data.append('usernameRegister', userName);
    data.append('genderRegister', gender);
    data.append('rolRegister', rol);
    data.append('passwordRegister', password);
    data.append('passwordConfirmRegister', passwordConfirm);
     //alert
    const alertSuccess = (txt) => {
        Swal.fire({
        icon: 'success',
        title: 'Your work has been saved',
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

    axios.post('http://localhost:8080/v1/register',data)
    .then(function (response) {
        console.log(response.data);
        alertSuccess(response.data.message)
        window.location.href = '/login'
    })
    .catch(function (error) {
        console.log(error);
        alertError(error.response.data.message)
    });

}

export default RegisterApi