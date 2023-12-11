import React from 'react'
import { useNavigate } from 'react-router-dom'
import Info from '../../Components/Browse/Info'
import Notes from '../../Components/Browse/Notes'
import Weather from '../../Components/Browse/Weather'
import Timer from '../../Components/Browse/Timer'
import News from '../../Components/Browse/News'

export default function Browse() {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/movies");
  };
  return (
    <div
      style={{
        height: "100vh",
        width: "100vw",
        background: "black",
        paddingLeft: "3vw",
        paddingTop: "3vh",
        boxSizing: "border-box",
      }}
    >
      <div style={{ display: "flex", gap: "20px" }}>
        <div>
          <Info />
          <Weather />
          <Timer />
        </div>
        <div>
          <Notes />
        </div>
        <div>
          <News />
        </div>
      </div>
      <button
        style={{
          position: "absolute",
          bottom: "3vh",
          right: "4vw",
          background: "green",
          color: "white",
          padding: "6px",
          borderRadius: "12px",
          fontFamily:"cursive",
          border:"1px solid white"
        }}
        onClick={handleClick}
      >
        Next Page
      </button>
    </div>
  )
}
