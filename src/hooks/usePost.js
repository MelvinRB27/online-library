import axios from  "axios"
import Swal from "sweetalert2"

const PostApi = (data) => {
  
    const errorAlert = (msj) =>{
    
        Swal.fire({
        icon: 'error',
            title: 'Oops...',
            text: msj,
        })
        
    }    
    const successAlert = (msj) =>{
        Swal.fire({
          icon: 'success',
          title: msj,
          showConfirmButton: false,
          timer: 1500
        })
    } 

    axios.post('http://localhost:3000/books',data)
    .then(function (response) {
        console.log(response);
        successAlert("added successfully")
    })
    .catch(function (error) {
        console.log(error);
        errorAlert("Error adding")
    });

}

export default PostApi;