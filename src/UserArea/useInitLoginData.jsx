import { useEffect } from "react";

const useInitLoginData = (loginData) =>
  useEffect(() => {
    if (!loginData) {
      return;
    }

    const parsedData = JSON.parse(loginData);
    if (!parsedData.rememberMe)
      localStorage.setItem(
        "loginData",
        JSON.stringify({ email: "", password: "", rememberMe: false })
      );
  }, []);

export default useInitLoginData;
