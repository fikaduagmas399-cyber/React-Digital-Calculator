import React, { useState } from 'react';
import './App.css';
import Display from './components/Display';
import Buttons from './components/Buttons';

function App() {
  const [inputValue, setInputValue] = useState('');
  const [isResult, setIsResult] = useState(false);
  const operators = ['+', '-', '*', '/', '%'];

  const handleButtonClick = (value) => {
    if(value === 'C') {
      setInputValue('');
      setIsResult(false);
    } else if(value === '⌫') {
      if(isResult) {
        setInputValue('');
        setIsResult(false);
        return;
      }
      setInputValue((prev) => prev.slice(0, -1));
    } else if(value === '=') {
       try {
         let sanitizedInput = inputValue.trim();
         if(!/^[0-9+\-*/%.\s]+$/.test(sanitizedInput)) {
          setInputValue('Error');
          setIsResult(true);
          return;
         }
         sanitizedInput = sanitizedInput.replace(/(\d+(?:\.\d+)?)%(?!\d)/g, '($1 / 100)');

         const result = Function('"use strict";return('+ sanitizedInput +')')();

         setInputValue(String(result));
         setIsResult(true);
       } catch (error) {
        setInputValue('Error');
        setIsResult(true);
       }
    } else{
      if(isResult) {
        if(operators.includes(value)) {
          setIsResult(false);
        } else {
          setInputValue(value);
          setIsResult(false);
          return;
        }
      }

      if(operators.includes(value)) {
        if(inputValue === '') return;
        const lastChar = inputValue.slice(-1);

        if(operators.includes(lastChar)) {
          return;
        }
      } else if(value === '0') {
        const parts = inputValue.split(/[\+\-\*\/\%]/);
        const currentNumber = parts[parts.length - 1];

        if(currentNumber === '0') {
          return;
        }
      } else if(value === '.') {
        const parts = inputValue.split(/[\+\-\*\/\%]/);
        const currentNumber = parts[parts.length -1];

        if(currentNumber.includes('.')) {
          return;
        }
      }

    setInputValue((prevValue) => 
      prevValue + value
    );
  }
  };

  return (
    <div className="calculator">
      <Display inputValue={inputValue} />
      <Buttons onButtonClick={handleButtonClick} />
    </div>
  );
}

export default App;