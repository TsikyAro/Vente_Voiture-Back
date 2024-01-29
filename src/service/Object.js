
const baseUrl=process.env.REACT_APP_BACK_URL;
const token = localStorage.getItem("token");
export const getObject=async (apiName)=>{
    console.log(baseUrl+"/"+apiName)
    const response=await  fetch(`${baseUrl}/${apiName}`,{
        headers: {
        'Authorization': token,
        'Content-Type': 'application/json'
        },});
    const bookings=await response.json();
    return bookings;
}