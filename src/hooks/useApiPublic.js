import { useState, useEffect } from "react";
import axios from "axios";

const Fetch = (uri) => {
    const [data, setData] = useState([])
    const [error, setError] = useState()

    useEffect(() => {
      // GET  request using axios inside useEffect React hook
      const getBooks = async() =>{

        await axios({
          method: 'get',
          url: `https://www.etnassoft.com/api/v1/get/`+uri,
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
   }, [uri]);
    return [data, error]
}

export default Fetch