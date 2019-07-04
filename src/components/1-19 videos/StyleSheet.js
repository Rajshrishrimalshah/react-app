import React from "react";
import "./myStyles.css";
const StyleSheet = ({ primary }) => {
  let primaryColor = primary ? "primary" : "";
  return (
    <div>
      <h1 className={primaryColor}> StyleSheet </h1>
    </div>
  );
};

export default StyleSheet;
