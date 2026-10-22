import React, { useState } from 'react';
import Display from './Display';

function Button() {
  const [displayValue, setDisplayValue] = useState('');
  const [isCalculated, setIsCalculated] = useState(false);

  const handleButtonClick = (value) => {
    const operators = ['+', '-', '*', '/', '%'];
    if (isCalculated) {
      if (operators.includes(value)) {
        setIsCalculated(false);
      } else {
        setDisplayValue('');
        setIsCalculated(false);
      }
    }

    // write a number or a sign to screen
    setDisplayValue(displayValue + value);
  };

  const clearDisplay = () => {
    setDisplayValue('');
    setIsCalculated(false);
  };

  const backspace = () => {
    setDisplayValue(displayValue.slice(0, -1));
  };

  const calculate = () => {
    let expression = displayValue;
    if (!expression) return;

    try {
      // percent (%) calculation
      expression = expression.replace(/([0-9\.]+)\s*%(?![0-9])/g, "($1 * 0.01)");

      const tokens = expression.match(/(?:(?<=[+\-*/%]|^)-)?(?:\d*\.\d+|\d+\.\d*|\d+)|[\+\-\*\/%]/g);

      if (!tokens) throw new Error("Invalid Input");

      // keep priority or first calculate multiplication and division
      let i = 0;
      while (i < tokens.length) {
        if (tokens[i] === '*' || tokens[i] === '/' || tokens[i] === '%') {
          const operator = tokens[i];
          const left = parseFloat(tokens[i - 1]);
          const right = parseFloat(tokens[i + 1]);

          // calculate product or division
          let result;
          if (operator === '*') {
            result = left * right;
          } else if (operator === '/') {
            result = left / right;
          } else if (operator === '%') {
            result = left % right;
          }

          // operations replace by result
          tokens.splice(i - 1, 3, result);
          i--; 
        } else {
          i++;
        }
      }

      // calculate addition and subtraction
      let total = parseFloat(tokens[0]);
      for (let j = 1; j < tokens.length; j += 2) {
        const operator = tokens[j];
        const nextValue = parseFloat(tokens[j + 1]);

        if (operator === '+') {
          total += nextValue;
        } else if (operator === '-') {
          total -= nextValue;
        }
      }

      // check the result is correct and display on the screen
      if (isNaN(total) || !isFinite(total)) {
        setDisplayValue("Error");
      } else {
        // results are large decimal bound in four digit decimal place
        setDisplayValue(Number(total.toFixed(4)).toString());
        setIsCalculated(true);
      }

    } catch (error) {
      // show error message any writing mistake
      setDisplayValue('Error');
      setIsCalculated(true);
    }
  };

  const handleKeyDown = (event) => {
    const key = event.key; // name of clicked key

    // permission key and basic sign
    const allowedKeys = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '+', '-', '*', '/', '%', '.'];

    if (allowedKeys.includes(key)) {
      event.preventDefault(); // remove browser default behavior
      handleButtonClick(key);
    } else if (key === 'Enter' || key === '=') {
      event.preventDefault();
      calculate();
    } else if (key === 'Backspace') {
      event.preventDefault();
      backspace();
    } else if (key === 'Escape' || key.toLowerCase() === 'c') {
      event.preventDefault();
      clearDisplay();
    }
  };

  return(
    <div className="buttons">
        <Display />
        {[
            {value: 'C', onClick: () => setInput('')},
            {value: '/', onClick: () => setInput(input + '/')},
            {value: '*', onClick: () => setInput(input + '*')},
            {value: '⌫', onClick: () => setInput(input.slice(0, -1))},

            {value: '7', onClick: () => setInput(input + '7')},
            {value: '8', onClick: () => setInput(input + '8')},
            {value: '9', onClick: () => setInput(input + '9')},
            {value: '%', onClick: () => setInput(input + '%')},

            {value: '4', onClick: () => setInput(input + '4')},
            {value: '5', onClick: () => setInput(input + '5')},
            {value: '6', onClick: () => setInput(input + '6')},
            {value: '-', onClick: () => setInput(input + '-')},

            {value: '1', onClick: () => setInput(input + '1')},
            {value: '2', onClick: () => setInput(input + '2')},
            {value: '3', onClick: () => setInput(input + '3')},
            {value: '+', onClick: () => setInput(input + '+')},

            {value: '0', onClick: () => setInput(input + '0')},
            {value: '.', onClick: () => setInput(input + '.')},
            {value: '=', onClick: () => setInput(input + '=')},
        ].map((button, index) => (
            <button key={index} onClick={() => handleButtonClick(button.value)}>{button.value}</button>
        ))}
    </div>
    
  );
}

export default Button;