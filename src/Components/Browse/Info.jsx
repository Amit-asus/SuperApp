import React, { useState, useEffect } from "react";
import styles from "./Info.module.css";
import Profile from "../../assets/profileBig.png";


export default function Info() {
  const [userInfo, setUserInfo] = useState({
    name: "John Doe",
    email: "johndoe@example.com",
    userID: "12345",
  });
  const genre = JSON.parse(window.localStorage.getItem("genres"));

  // To set the user data on the screen
  useEffect(() => {
    const userDataFromStorage = localStorage.getItem("userData");

    if (userDataFromStorage) {
      const parsedUserData = JSON.parse(userDataFromStorage);

      // Extract required fields from userData object and update userInfo state
      const { name, username, mail } = parsedUserData;
      setUserInfo((prevUserInfo) => ({
        ...prevUserInfo,
        name: name || prevUserInfo.name,
        email: mail || prevUserInfo.email,
        userID: username || prevUserInfo.userID,
      }));
    }
  }, []);

  return (
    <div>
      <div className={styles.outsideDiv}>
        <img src={Profile} alt="boypng" className={styles.boyPng} />
        <div className={styles.info}>
          <p>{userInfo.name}</p>
          <p>{userInfo.email}</p>
          <p>{userInfo.userID}</p>
          <Chips categories={genre} color={"#9F94FF"} />
        </div>
      </div>
    </div>
  );
}



const Chips = ({ color, categories }) => {
  return (
    <div style={{ width: "20vw" }}>
      {categories.map((category) => (
        <button
          style={{
            background: `${color}`,
            borderRadius: "12px",
            width: "100px",
            color: "white",
            border: "none",
            padding: "6px",
            height: "30px",
            flexShrink: 0,
            margin: "10px",
          }}
        >
          {category}{" "}
          <span style={{ color: "black", marginLeft: "4px" }}>X</span>
        </button>
      ))}
    </div>
  );
};