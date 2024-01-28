
const baseUrl=process.env.REACT_APP_BACK_URL;
export const getObject=async (apiName)=>{
    const response=await  fetch(`${baseUrl}/${apiName}`);
    const bookings=await response.json();
    return bookings;
}