import { useState, useEffect } from "react";
import axios from "axios";

const useAxios = (url, autoFetch = false) => {
  const [state, setState] = useState({
    loading: false,
    error: null,
    data: null
  });
  const [trigger, setTrigger] = useState(0);
  console.log("TCL: useAxios -> state", state);

  useEffect(() => {
    if (autoFetch) {
      fetchAxios();
    }
  }, [trigger, autoFetch]);

  const fetch = () => {
    setState({ ...state, loading: true });

    setTrigger(Date.now());
  };

  const fetchAxios = async () => {
    try {
      const { data } = await axios(url);
      console.log("TCL: fetchAxios -> data", data);
      setState(prevState => ({ ...prevState, loading: false, data }));
    } catch (error) {
      setState(prevState => ({ ...prevState, loading: false, error }));
    }
  };

  return { ...state, fetch };
};

export default useAxios;
