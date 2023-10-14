import React, { useState, useEffect } from "react";
import { Route, Routes, Navigate } from "react-router-dom";

import useLocalStorageValue from "./useLocalStorageValue";
import useInitLoginData from "./useInitLoginData";
import LoginForm from "../LoginForm";
import Button from '../ReusableCompoinents/Button';
import styles from "./UserArea.module.css";

const UserArea = () => {
  const loginData = useLocalStorageValue("loginData");
  useInitLoginData(loginData);

  const [savedEmail, setSavedEmail] = useState(() => {
    if (loginData) {
      const parsedData = JSON.parse(loginData);

      if (parsedData.rememberMe) return parsedData.email;
    }

    return "";
  });

  useEffect(() => {
    const parsedData = JSON.parse(loginData);
    setSavedEmail(parsedData?.email);
  }, [loginData]);

  const handleLogout = () => {
    localStorage.removeItem("loginData");
  };

  return (
    <div className={styles.container}>
      <Routes>
        <Route
          path="/"
          element={
            savedEmail ? (
              <>
              <div className={styles.logout_page}>
                <p>Hi, {savedEmail}</p>
                <div className={styles.logout_button}><Button onClick={handleLogout}>Logout</Button></div>
                </div>
              </>
            ) : (
              <Navigate to="/login" />
            )
          }
        />
        <Route
          path="/login"
          element={savedEmail ? <Navigate to="/" /> : <LoginForm />}
        />
      </Routes>
    </div>
  );
};

export default UserArea;
