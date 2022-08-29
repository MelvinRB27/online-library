import { useEffect } from "react";

const DeteleToken = () => {
    window.localStorage.removeItem('jwt-token');
    window.localStorage.removeItem('userDate');
    useEffect(() => {
        const deteleData = () => {
            window.localStorage.removeItem('jwt-token');
            window.localStorage.removeItem('userDate');
        }
        deteleData();
    },[])
}

export default DeteleToken;