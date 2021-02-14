import { useEffect, useState } from "react";
import getGifs from "../helpers/getGifs";

const useFetchGifs = (category) => {
  const [state, setState] = useState({
    data: [],
    loading: true,
  });

  // solo se ejecuta al renderizar el componente por primera vez ([])
  useEffect(() => {
    getGifs(category).then((imgs) =>
      setTimeout(() => {
        setState({
          data: imgs,
          loading: false,
        });
      }, 1000)
    );
  }, [category]);

  return state; //{ data: [], loading: true };
};

export default useFetchGifs;
