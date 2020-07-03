import React, { useState, useEffect, useContext } from "react";
import useAxios from "axios-hooks";

import store from "./store";

const Fetch = ({ url }) => {
  const [result, setResult] = useState({});
  const { setData } = useContext(store);
  const [{ data: res }, executeFetch] = useAxios(
    {
      url: url,
      method: "GET",
      headers: {
        Accept: "application/json",
      },
    },
    { manual: true }
  );
  useEffect(() => {
    executeFetch();
  }, []);
  useEffect(() => {
    if (res) setData(res);
  }, [res]);

  return <></>;
};

export default Fetch;
