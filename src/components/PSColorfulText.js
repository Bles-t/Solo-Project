// ColorfulText.js
import React from 'react';

// Define your custom colors here
const colors = ["#DE0029", "#326DB3", "#00AA9E", "#F3C202"];

const PSColorfulText = ({ text }) => {
  const letters = text.split('');
  const coloredLetters = letters.map((letter, index) => (
    <span key={index} style={{ color: colors[index % colors.length] }}>
      {letter}
    </span>
  ));

  return <>{coloredLetters}</>; // Use Fragment to avoid adding extra divs
};

export default PSColorfulText;
