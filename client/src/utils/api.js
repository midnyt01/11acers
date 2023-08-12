const API = 'https://11acersapi.nitrosk.com/customer';
// const API = 'http://localhost:8009/customer';

//property

async function httpGetAllCurrentProperties() {
    const adminToken = localStorage.getItem("admin")
    const response = await fetch(`${API}/current-property`, {
        method: "get",
        headers: {
            "auth-token": `${adminToken}`
        }
    })
    return await response.json()
}

async function httpGetAllRentalProperties() {
    const adminToken = localStorage.getItem("admin")
    const response = await fetch(`${API}/rental-property`, {
        method: "get",
        headers: {
            "auth-token": `${adminToken}`
        }
    })
    return await response.json()
}




export {
    httpGetAllCurrentProperties,

    httpGetAllRentalProperties,
}