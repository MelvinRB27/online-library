import { useState, useEffect } from "react";
import axios from "axios";

const GetDetail = (id) => {
    const [data, setData] = useState([])
    const [error, setError] = useState()
    console.log("OKOK",data)
    
    useEffect(() => {
      const getBooks = async() =>{
        await axios({
          method: 'get',
          url: `https://www.googleapis.com/books/v1/volumes/`+id,
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
    },[id])

    
    return [data, error]
}

export default GetDetail