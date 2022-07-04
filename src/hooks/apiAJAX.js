import { useState, useEffect } from "react";

const Fetch = ( endpoint ) => {
    const [book, setBook] = useState([])
    const [error, setError] = useState()
    console.log(book)
    useEffect( () => {

          var url = `${process.env.REACT_APP_URL_API}${endpoint}`;

          var xhr = new XMLHttpRequest();
          xhr.open("GET", url);
          
          xhr.onreadystatechange = function () {
             if (xhr.readyState === 4) {
                console.log(xhr.status);
                setBook(xhr.responseText);
             }};
          
          xhr.send();
    }, [endpoint])
    return [book, error]
}

export default Fetch