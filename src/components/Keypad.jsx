function Keypad({ onButtonClick }) {
  return (
    <div className="calculator-keys">
      {/* 1ኛ ረድፍ */}
      <button className="btn red" onClick={() => onButtonClick('C')}>C</button>
      <button className="btn blue" onClick={() => onButtonClick('/')}>÷</button>
      <button className="btn blue" onClick={() => onButtonClick('*')}>×</button>
      <button className="btn blue" onClick={() => onButtonClick('BACK')}>⌫</button>

      {/* 2ኛ ረድፍ */}
      <button className="btn dark" onClick={() => onButtonClick('7')}>7</button>
      <button className="btn dark" onClick={() => onButtonClick('8')}>8</button>
      <button className="btn dark" onClick={() => onButtonClick('9')}>9</button>
      <button className="btn blue" onClick={() => onButtonClick('%')}>%</button>

      {/* 3ኛ ረድፍ */}
      <button className="btn dark" onClick={() => onButtonClick('4')}>4</button>
      <button className="btn dark" onClick={() => onButtonClick('5')}>5</button>
      <button className="btn dark" onClick={() => onButtonClick('6')}>6</button>
      <button className="btn blue" onClick={() => onButtonClick('-')}>-</button>

      {/* 4ኛ ረድፍ */}
      <button className="btn dark" onClick={() => onButtonClick('1')}>1</button>
      <button className="btn dark" onClick={() => onButtonClick('2')}>2</button>
      <button className="btn dark" onClick={() => onButtonClick('3')}>3</button>
      <button className="btn blue" onClick={() => onButtonClick('+')}>+</button>

      {/* 5ኛ ረድፍ */}
      <button className="btn dark" onClick={() => onButtonClick('0')}>0</button>
      <button className="btn dark" onClick={() => onButtonClick('.')}>.</button>
      <button className="btn green span-two" onClick={() => onButtonClick('=')}>=</button>
    </div>
  );
}

export default Keypad;