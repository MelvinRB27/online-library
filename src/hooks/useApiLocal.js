import { useState, useEffect } from "react";
import { get } from 'axios';

const Fetch = ( endpoint ) => {
    const [book, setBook] = useState([])
    const [error, setError] = useState()
    
    useEffect( () => {
        const getBooks = async() =>{
            await get("http://localhost:3000/"+endpoint)
            .then(({data}) => setBook(data))
            .catch((e) => setError(e))
        }
        getBooks()
    }, [endpoint])
    return [book, error]
}

export default Fetch