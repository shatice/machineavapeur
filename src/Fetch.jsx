import React, { useEffect, useContext } from "react";
import useAxios from "axios-hooks";

import context from "./store/context";
import { url, urlChapters } from "./navDatas";

const Fetch = () => {
  const { setData, chapter, data, state, setChapters, chapters } = useContext(
    context
  );

  const [{ data: res }, executeFetch] = useAxios({
    url: url + `/${chapter + 1}`,
    method: "GET",
    headers: {
      Accept: "application/json",
    },
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
    executeFetchChapters();
  }, []);

  useEffect(() => {
    if (res) setData(res, state);
  }, [res]);

  useEffect(() => {
    if (resChapters) setChapters(resChapters, state);
  }, [resChapters]);

  return <></>;
};

export default Fetch;
