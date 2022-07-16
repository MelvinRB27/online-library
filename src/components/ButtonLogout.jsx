const ButtonLogout = () => {
    const DeteleToken = () => {
        window.localStorage.clear();
        window.location.href = '/login'
    }
    return(
        <button className="btn btn-danger" onClick={DeteleToken}>Logout</button>
    )    
}
export default ButtonLogout;