import React, { useState, useEffect, useContext } from "react";
import useAxios from "axios-hooks";

import context from "./store/context";
import { url } from "./navDatas";

const Fetch = () => {
  const { setData, chapter } = useContext(context);

  const [{ data: res }, executeFetch] = useAxios({
    url: url + `/${Number(chapter + 1)}`,
    method: "GET",
    headers: {
      Accept: "application/json",
    },
    manual: true,
  });
  useEffect(() => {
    executeFetch();
  }, [chapter]);

  useEffect(() => {
    if (res) setData(res);
  }, [res]);

  return <></>;
};

export default Fetch;
