import React, { useState } from 'react';

function backspace() {
    setInput(input.slice(0, -1));
}
function clearDisplay() {
  setInput('');
  setResult('');
}

function appendValue(value) {
  setInput(input + value);
}

function calculate(expression) {
  const tokens = expression.split(' ');
  const stack = [];
  const operators = {
    '+': (a, b) => a + b,
    '-': (a, b) => a - b,
    '*': (a, b) => a * b,
    '/': (a, b) => a / b,
  };

  for (const token of tokens) {
    if (token in operators) {
      const b = stack.pop();
      const a = stack.pop();
      stack.push(operators[token](a, b));
    } else {
      stack.push(parseFloat(token));
    }
  }

  return stack[0];
}

function Buttons() {
  const buttonList = [
    { value: 'C', onClick: clearDisplay, className: "btn-clear" },
    { value: '/', onClick: () => appendValue('/'), className: "btn-operator" },
    { value: '*', onClick: () => appendValue('*'), className: "btn-operator" },
    { value: '⌫', onClick: backspace, className: "btn-operator" },
    { value: '7', onClick: () => appendValue('7'), className: "btn-number" },
    { value: '8', onClick: () => appendValue('8'), className: "btn-number" },
    { value: '9', onClick: () => appendValue('9'), className: "btn-number" },
    { value: '%', onClick: () => appendValue('%'), className: "btn-operator" },
    { value: '4', onClick: () => appendValue('4'), className: "btn-number" },
    { value: '5', onClick: () => appendValue('5'), className: "btn-number" },
    { value: '6', onClick: () => appendValue('6'), className: "btn-number" },
    { value: '-', onClick: () => appendValue('-'), className: "btn-operator" },
    { value: '1', onClick: () => appendValue('1'), className: "btn-number" },
    { value: '2', onClick: () => appendValue('2'), className: "btn-number" },
    { value: '3', onClick: () => appendValue('3'), className: "btn-number" },
    { value: '+', onClick: () => appendValue('+'), className: "btn-operator" },
    { value: '0', onClick: () => appendValue('0'), className: "btn-number" },
    { value: '.', onClick: () => appendValue('.'), className: "btn-number" },
    { value: '=', onClick: calculate, className: "btn-equal" },
  ];

  const [input, setInput] = useState('');
  const [result, setResult] = useState('');

  const handleButtonClick = (value) => {
    switch (value) {
      case 'C':
        clearDisplay();
        break;
      case '=':
        setResult(calculate(input));
        break;
      default:
        appendValue(value);
        break;
    }
  };


  return (
    <div className="buttons">
      {buttonList.map((button, index) => (
        <button key={index} className={button.className} onClick={() => handleButtonClick(button.value)}>
          {button.value}
        </button>
      ))}
    </div>
  );
}

export default Buttons;