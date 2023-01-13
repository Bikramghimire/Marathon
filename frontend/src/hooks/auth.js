import react, { useState } from "react";

function useAuth() {
  const [auth, setAuth] = useState(false);
  return {
    auth,
    login() {
      return new Promise((done) => {
        setAuth(true);
        done();
      });
    },
    logout() {
      return new Promise((done) => {
        setAuth(false);
        done();
      });
    },
  };
}
export default useAuth;
