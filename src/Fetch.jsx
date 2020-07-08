import React, { useEffect, useContext } from "react";
import useAxios from "axios-hooks";

import context from "./store/context";
import { url, urlChapters } from "./navDatas";

const Fetch = () => {
  const { setData, chapter, state, setChapters, isAuth } = useContext(context);

  const [{ data: res }, executeFetchData] = useAxios({
    url: url + `/${chapter}`,
    method: "GET",
    headers: {
      Accept: "application/json",
    },
    manual: true,
  });
  const [{ data: resChapters }, executeFetchChapters] = useAxios({
    url: urlChapters,
    method: "GET",
    headers: {
      Accept: "application/json",
    },
    manual: true,
  });

  useEffect(() => {
    /* eslint-disable */
    executeFetchChapters({ requestPolicy: "network-only" });
    executeFetchData({ requestPolicy: "network-only" });
  }, []);

  useEffect(() => {
    /* eslint-disable */
    if (res) setData(res, state);
  }, [res, isAuth]);

  useEffect(() => {
    /* eslint-disable */
    if (resChapters) setChapters(resChapters, state);
  }, [resChapters, isAuth]);

  return <></>;
};

export default Fetch;
