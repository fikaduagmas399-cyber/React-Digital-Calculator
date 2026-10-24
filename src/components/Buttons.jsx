import React, { useState } from 'react';



function appendValue(value) {
  setInputValue(input + value);
}

function Buttons({onButtonClick}) {
  const buttonList = [
    { value: 'C', onClick: () => onButtonClick('c'), className: "btn-clear" },
    { value: '/', onClick: () => onButtonClick('/'), className: "btn-operator" },
    { value: '*', onClick: () => onButtonClick('*'), className: "btn-operator" },
    { value: '⌫', onClick: () => onButtonClick('⌫'), className: "btn-operator" },
    { value: '7', onClick: () => onButtonClick('7') },
    { value: '8', onClick: () => onButtonClick('8') },
    { value: '9', onClick: () => onButtonClick('9') },
    { value: '%', onClick: () => onButtonClick('%'), className: "btn-operator" },
    { value: '4', onClick: () => onButtonClick('4') },
    { value: '5', onClick: () => onButtonClick('5') },
    { value: '6', onClick: () => onButtonClick('6') },
    { value: '-', onClick: () => onButtonClick('-'), className: "btn-operator" },
    { value: '1', onClick: () => onButtonClick('1') },
    { value: '2', onClick: () => onButtonClick('2') },
    { value: '3', onClick: () => onButtonClick('3')  },
    { value: '+', onClick: () => onButtonClick('+'), className: "btn-operator" },
    { value: '0', onClick: () => onButtonClick('0')  },
    { value: '.', onClick: () => onButtonClick('.') },
    { value: '=', onClick: () => onButtonClick('='), className: "btn-equal" },
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