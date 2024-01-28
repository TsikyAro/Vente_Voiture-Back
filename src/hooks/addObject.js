// import { useEffect, useState } from "react";
// import { getObject } from "../service/Object";

const baseUrl = process.env.REACT_APP_BACK_URL;
console.log('baseUrl:', baseUrl);
const token = localStorage.getItem("token");
export default function useAddObject(apiName, data) {
  fetch(`${baseUrl}/${apiName}`, {
    method: 'POST',
    headers: {
      'Authorization': token,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  })
  .then(response => {
    if (response.ok) {
      console.log("Ok");
      window.location.reload();
    } else {
      console.log(data);
      console.log("Error");
    }
  })
  .catch(error => {
    console.log(data);
    console.error(error);
  });
}


