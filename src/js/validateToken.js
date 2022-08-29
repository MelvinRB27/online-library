
const ValidateToken = () => {
    let error, userData;

    const cookieUser = window.localStorage.getItem("login-token")
    const dataUser = window.localStorage.getItem("userDate")

    if (cookieUser || dataUser) {
        userData = dataUser
    } else  error = "Error unauthorized"

    return [error, userData]
}

export default ValidateToken;