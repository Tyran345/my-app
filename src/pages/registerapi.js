export const UserRegister = (register)=>{
    return fetch(`http://localhost:3002/api/contact`,{
        method: "POST",
        headers:{
            Accept: "application/json",
            "Content-Type": "application/json"
        },
        body: JSON.stringify(register)
    })
    .then(response=>{
        return response.json();
    })
    .then(data => {
        console.log(data); // check the data you are receiving from the server
        return data
    })
    .catch((err)=>console.log(err))
}
