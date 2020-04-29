import React, { useState } from 'react';

const Counter = () => {
  const [number, setNumber] = useState(0);
  return (
    <div>
      <p>현재 카운터 될 값은 {number}입니다.</p>
      <button onClick={() => setNumber(number + 1)}>+</button>
      <button onClick={() => setNumber(number - 1)}>-</button>
    </div>
  );
};

export default Counter;
