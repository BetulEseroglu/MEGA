import React, { useState } from "react";
import "./Dropdown.css";
import colorIcon from "./colorIcon.svg";
const noteTheme = {
  white: {
    // Beyaz arka plan, koyu gri renk metin
    backgroundColor: "white",
    color: "rgb(80, 79, 79)",
  },
  "Açık Sarı": {
   
    backgroundColor: "#fbf8cc",
    color: "rgb(80, 79, 79)",
  },
  "#bej": {
    
    backgroundColor: "#fde4cf",
    color: "white",
  },
  "Açık Pembe": {
    
    backgroundColor: "#ffcfd2",
    color: "white",
  },
  "Koyu Pembe": {
    
    backgroundColor: "#f1c0e8",
    color: "white",
  },
  "Mor": {
    // Turkuaz tonlarında arka plan, beyaz renk metin
    backgroundColor: "#cfbaf0",
    color: "white",
  },
  "#Koyu MAvi": {
    // Koyu pembe tonlarında arka plan, beyaz renk metin
    backgroundColor: "#a3c4f3",
    color: "white",
  },
  "mavi": {
    // Bej arka plan, koyu gri renk metin
    backgroundColor: "#90dbf4",
    color: "rgb(80, 79, 79)",
  },
  "koyu yeşil": {
    // Açık mavi tonlarında arka plan, koyu gri renk metin
    backgroundColor: "#98f5e1",
    color: "rgb(80, 79, 79)",
  },
  "yeşil": {
    // Açık yeşil tonlarında arka plan, beyaz renk metin
    backgroundColor: "#b9fbc0",
    color: "white",
  },
  "#EE7214": {
    // Turuncu tonlarında arka plan, beyaz renk metin
    backgroundColor: "#d8e2dc",
    color: "white",
  },
  "#B99470": {
    // Açık kahverengi tonlarında arka plan, beyaz renk metin
    backgroundColor: "#bcb8b1",
    color: "white",
  },
  
};
function Dropdown(props) {
  const [showColorOptions, setShowColorOptions] = useState(false);
  const { theme, setNoteTheme, noteID } = props;
  const handleOnClick = (e) => {
    setNoteTheme(noteTheme[e.target.getAttribute("value")]);
    const noteList = JSON.parse(localStorage.getItem("note"));
    noteList[noteID].theme = noteTheme[e.target.getAttribute("value")];
    localStorage.setItem("note", JSON.stringify(noteList));
  };
  return (
    <>
      <div className="dropdown">
        <button
          className="colorChangeIcon"
          style={theme}
          onClick={() => {
            setShowColorOptions((prev) => !prev);
          }}
        >
          <img src={colorIcon} alt="Change Color" />
        </button>
        <ul
          className={`dropdown__items ${
            showColorOptions && "show_dropdown__items"
          }`}
        >
          {Object.keys(noteTheme).map((color, index) => (
            <li
              onClick={handleOnClick}
              key={index}
              value={color}
              style={{
                ...noteTheme[color],
                border: `1px solid ${
                  theme && color === theme.backgroundColor
                    ? "purple"
                    : "rgb(227, 227, 227)"
                }`,
              }}
            ></li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default Dropdown;
