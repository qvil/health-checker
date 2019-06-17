import React, { useState } from "react";
import axios from "axios";

const ServerList = ({ url }) => {
  const [state, setState] = useState({
    loading: false,
    error: null,
    data: null
  });

  const checkHealth = url => () => {
    // Hooks
    // fetch();

    // API
    axios("http://ddragon.leagueoflegends.com/api/versions.json")
      .then(res => {
        console.log(res);
        const data = res.data;
        setState({ ...state, loading: false, data });
      })
      .catch(error => setState({ ...state, loading: false, error }));
  };
  const { loading, error, data } = state;
  return (
    <li>
      <span>{url}</span>
      <button onClick={checkHealth(url)}>Check</button>
      {loading && <span>Loading...</span>}
      {!loading && error && <span>Error</span>}
      {!loading && !error && data && <span>{data}</span>}
    </li>
  );
};

export default ServerList;
