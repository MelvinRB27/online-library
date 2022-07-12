import { useState, useEffect } from "react";
import axios from "axios";

const Fetch = ( {dataa} ) => {
    const [data, setData] = useState([])
    const [error, setError] = useState()
    console.log(data)
    useEffect(() => {
      // POST request using axios inside useEffect React hook
      const getBooks = async() =>{
         await axios.post('http://localhost:8080/v1/register', dataa)
         .then(response => setData(response.data.id))
         .catch(error => setError(error))
     }
     getBooks()
   }, [dataa]);
    return [data, error]
}

export default Fetch