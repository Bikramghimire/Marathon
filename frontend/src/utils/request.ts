import axios from "axios";
const API_URL = "http://localhost:3000/";
// export const handleLogout = async () => {
//   localStorage.removeItem("user");
//   axios.defaults.headers.Authorization = "";

//   location.reload();
// };

// import store from '@/store';
const request = async (config: any, isDebug = false) => {
  try {
    const res = await axios({
      ...config,
      url: API_URL + config.url,
    });

    // if (res.status === 401 && res.data.message === "jwt expired") {
    //   handleLogout();
    // }
    if (res.status >= 200 && res.status < 300) {
      if (res.data.status === "error") {
        throw res;
      } else {
        return res?.data?.data || res?.data || res;
      }
    }
  } catch (err: any) {
    console.log(err.response);

    // try {
    //   if (err.response.data.message === "jwt expired") {
    //     handleLogout();
    //   }
    // } catch (err) {}

    try {
      isDebug && console.log(err.response.data);
    } catch (err) {}
    if (err && err.response && err.response.data && err.response.data.message) {
      throw err.response.data.message;
    }
    if (err && err.response && err.response.data && err.response.data.error) {
      throw err.response.data.error;
    }
    throw err.message || err;
  }
};

export default request;
