import { useEffect, useState } from "react";
import { getObject } from "../service/Object";

export default function useObject(apiName) {
  const [objects, setObjects] = useState([]);
  useEffect(() => {
      const fetchData = async () => {
      const data = await getObject(apiName);
      setObjects(data);
    };
    fetchData();
  }, []);

  return [objects];
}
