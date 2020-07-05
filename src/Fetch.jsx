import React, { useState, useEffect, useContext } from "react";
import useAxios from "axios-hooks";

import context from "./store/context";
import { url } from "./navDatas";

const Fetch = () => {
  const { setData, chapter, data, state } = useContext(context);

  const [{ data: res }, executeFetch] = useAxios({
    url: url + `/${chapter + 1}`,
    method: "GET",
    headers: {
      Accept: "application/json",
    },
  });
  useEffect(() => {
    // executeFetch();
  }, [chapter]);

  useEffect(() => {
    if (res) setData(res, state);
    console.log(data);
  }, [res]);

  return <></>;
};

export default Fetch;
