import { useState, useEffect } from "react";
import axios from "axios";

const GetDetail = (id) => {
    const [data, setData] = useState([])
    const [error, setError] = useState()

    useEffect(() => {
      // GET  request using axios inside useEffect React hook
      const getBooks = async() =>{
        await axios({
          method: 'get',
          url: `https://www.etnassoft.com/api/v1/get/?id=`+id,
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

export default GetDetail