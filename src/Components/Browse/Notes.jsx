import React from "react";
import { useState } from "react";
import styles from "./Notes.module.css";
import Edit from "../../assets/edit.png";
import pen from "../../assets/pen.png";

export default function Notes() {
  const [text, setText] = useState(
    JSON.parse(window.localStorage.getItem("text"))
  );
  const handleChange = (e) => {
    setText(e.target.value);
    window.localStorage.setItem("text", JSON.stringify(text));
  };
  return (
    <div className={styles.outerDiv}>
      <h3>All Notes</h3>
      <textarea
        className={styles.textArea}
        value={text}
        onChange={(e) => handleChange(e)}
      />
      <img src={Edit} alt="pen" className={styles.penImage} />
      <img
        src={pen}
        style={{
          width: "20px",
          height: "20px",
          position: "absolute",
          bottom: "17px",
          right: "10px",
        }}
      />
    </div>
  );
}
