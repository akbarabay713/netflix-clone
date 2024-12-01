import { useEffect, useState } from "react";
import axios from "../axios";
const useGetData = (fetchUrl) => {
  const [items, setItems] = useState([]);
  useEffect(() => {
    async function getItems() {
      const { data } = await axios.get(fetchUrl);
      console.log(data.results)
      const filter = data.results.filter(
        (movie) => movie.media_type === "movie" || !movie.media_type
      );
      setItems(filter);
      return data;
    }

    getItems();

    // return getItems;
  }, [fetchUrl]);

  return items;
};

export default useGetData;
