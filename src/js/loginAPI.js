import axios from 'axios';
import Cookies from 'universal-cookie';

import Swal from 'sweetalert2';

const LoginApi = (userName, password) => {

    var FormData = require('form-data');
    var data = new FormData();
    data.append('usernameLogin', userName);
    data.append('passwordLogin', password);
    
    const cookies = new Cookies();
    const tokenKey = "login-token";

    const alertSuccess = (txt) => {
        Swal.fire({
        icon: 'success',
        title: 'Login success',
        text: txt,
        showConfirmButton: false,
        timer: 1500
    })}
    
    const alertError = (txt) => {
    Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: txt,
        timer: 3500
        })
    }

    axios.post('http://localhost:8080/v1/login',data)
    .then(function (response) {
        console.log(response.data);
        alertSuccess(response.data.message)

        cookies.set('jwt', response.data.cookie, { path: 'localhost:8080/v1/login' });
        window.localStorage.setItem(tokenKey, response.data.cookie);
        window.localStorage.setItem("userData", JSON.stringify(response.data));
        window.location.href = '/user'
    })
    .catch(function (error) {
        console.log(error);
        alertError(error.response.data.message);
    });
}


export default LoginApi