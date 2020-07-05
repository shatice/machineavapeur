import React, { useEffect, useContext } from "react";
import useAxios from "axios-hooks";

import store from "./store";
import { url } from "./navDatas";

const Fetch = () => {
  const { setData, chapterContext } = useContext(store);
  console.log(chapterContext);

  const [{ data: res }, executeFetch] = useAxios({
    url: url + `/${chapterContext + 1}`,
    method: "GET",
    headers: {
      Accept: "application/json",
    },
    manual: true,
  });
  useEffect(() => {
    executeFetch();
  }, [chapterContext]);

  useEffect(() => {
    if (res) setData(res);
    console.log(res);
  }, [res]);

  return <></>;
};

export default Fetch;
