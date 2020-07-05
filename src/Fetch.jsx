import React, { useEffect, useContext } from "react";
import useAxios from "axios-hooks";

import context from "./store/context";
import { url } from "./navDatas";

const Fetch = () => {
  const { setData, chapter, state } = useContext(context);

  const [{ data: res }] = useAxios({
    url: url + `/${chapter + 1}`,
    method: "GET",
    headers: {
      Accept: "application/json",
    },
  });

  useEffect(() => {
    if (res) setData(res, state);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [res]);

  return <></>;
};

export default Fetch;
