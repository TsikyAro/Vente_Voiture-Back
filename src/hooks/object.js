// import {  useState } from "react";
import { getObject } from "../service/Object";

export default function UtiliserObject(apiName) {
  // const [objects, setObjects] = useState([]);
  // useEffect(() => {
      const fetchData = async () => {
      const data = await getObject(apiName);
      return data;
    };
    let objects =  fetchData();
  // }, []);

  return objects;
}
