import React, { useState } from 'react';



function appendValue(value) {
  setInputValue(input + value);
}

function Buttons({onButtonClick}) {
  const buttonList = [
    { value: 'C', onClick: '', className: "btn-clear" },
    { value: '/', onClick: () => onButtonClick('/'), className: "btn-operator" },
    { value: '*', onClick: () => onButtonClick('*'), className: "btn-operator" },
    { value: '⌫', onClick: '', className: "btn-operator" },
    { value: '7', onClick: () => onButtonClick('7'), className: "btn-number" },
    { value: '8', onClick: () => onButtonClick('8'), className: "btn-number" },
    { value: '9', onClick: () => onButtonClick('9'), className: "btn-number" },
    { value: '%', onClick: () => onButtonClick('%'), className: "btn-operator" },
    { value: '4', onClick: () => onButtonClick('4'), className: "btn-number" },
    { value: '5', onClick: () => onButtonClick('5'), className: "btn-number" },
    { value: '6', onClick: () => onButtonClick('6'), className: "btn-number" },
    { value: '-', onClick: () => onButtonClick('-'), className: "btn-operator" },
    { value: '1', onClick: () => onButtonClick('1'), className: "btn-number" },
    { value: '2', onClick: () => onButtonClick('2'), className: "btn-number" },
    { value: '3', onClick: () => onButtonClick('3'), className: "btn-number" },
    { value: '+', onClick: () => onButtonClick('+'), className: "btn-operator" },
    { value: '0', onClick: () => onButtonClick('0'), className: "btn-number" },
    { value: '.', onClick: () => onButtonClick('.'), className: "btn-number" },
    { value: '=', onClick: '', className: "btn-equal" },
  ];

  return (
    <div className="buttons">
      {buttonList.map((button, index) => (
        <button key={index} className={button.className} onClick={() => onButtonClick(button.value)}>
          {button.value}
        </button>
      ))}
    </div>
  );
}

export default Buttons;