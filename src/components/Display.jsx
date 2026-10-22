import React, { useState } from 'react';

function Display() {
  const [displayValue, setDisplayValue] = useState('');

  return (
    <div>
      <input
        type="text"
        id="display"
        value={displayValue}
        placeholder="0"
        readOnly
      />
    </div>
  );
}

export default Display;