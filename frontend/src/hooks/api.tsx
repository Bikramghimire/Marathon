import React, { useState } from "react";
import request from "../utils/request";

const useAPI = (): [
  makeRequest: (config: any) => any,
  state: {
    loading: boolean;
    error: string;
    data: any;
  }
] => {
  const [state, setState] = useState({
    loading: false,
    error: "",
    data: null,
  });
  const makeRequest = async (config: any) => {
    try {
      setState({
        loading: true,
        error: "",
        data: state.data,
      });
      const res = await request(config);
      setState({
        loading: false,
        error: "",
        //@ts-ignore
        data: res,
      });
      return res;
    } catch (error: any) {
      setState({
        loading: false,
        error: error,
        data: state.data,
      });
    }
  };

  return [makeRequest, state];
};

export default useAPI;
