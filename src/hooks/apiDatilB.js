import { useState, useEffect } from "react";
import axios from "axios";

const GetDetailLocal = (id) => {
    const [data, setData] = useState([])
    const [error, setError] = useState()
    console.log(data)

    useEffect(() => {
      // GET  request using axios inside useEffect React hook
      const getBooks = async() =>{
        await axios({
          method: 'get',
          url: `http://localhost:3000/books?id=`+id,
        })
        .then(function (response) {
          // console.log(response.data)
          setData(response.data);
        })
        .catch(function (error) {
          console.log(error);
          setError(error);
        });
     }
     getBooks()
   }, [id]);
    return [data, error]
}

export default GetDetailLocal