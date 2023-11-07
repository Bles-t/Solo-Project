// ColorfulText.js
import React from 'react';

// Define your custom colors here
const colors = ["#ff3939", "#00ce00", "#ffce29", "#00deff", "#007b4a"];

const ColorfulText = ({ text }) => {
  const letters = text.split('');
  const coloredLetters = letters.map((letter, index) => (
    <span key={index} style={{ color: colors[index % colors.length] }}>
      {letter}
    </span>
  ));

  return <>{coloredLetters}</>; // Use Fragment to avoid adding extra divs
};

export default ColorfulText;
