import { useState, useEffect } from "react";
import axios from "axios";

const Fetch = (uri) => {
    const [data, setData] = useState([])
    const [error, setError] = useState()
    console.log("Vamos a ver",data)

    useEffect(() => {
      // GET  request using axios inside useEffect React hook
      const getBooks = async() =>{

        await axios({
          method: 'get',
          url: `https://www.googleapis.com/books/v1/volumes?q=`+uri,
        })
        .then(function (response) {
          // console.log(response.data)
          setData(response.data.items);
        })
        .catch(function (error) {
          console.log(error);
          setError(error);
        });
     }
     getBooks()
   }, [uri]);
    return [data, error]
}

export default Fetch