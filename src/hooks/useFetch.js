// import { useState, useEffect } from "react";

// const Fetch = ( endpoint ) => {
//     const [book, setBook] = useState([])
//     const [error, setError] = useState()
    
//     useEffect( () => {
//             get(`${process.env.REACT_APP_URL_API}${endpoint}`)
//             .then(({data}) => setBook(data))
//             .catch((e) => setError(e))
//     }, [endpoint])
//     return [book, error]
// }

// export default Fetch