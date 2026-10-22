import React, { useState } from 'react';

function Display({inputValue}) {

  return (
    <div>
      <input
        type="text"
        id="display"
        value={inputValue}
        placeholder="0"
        readOnly
      />
    </div>
  );
}

export default Display;