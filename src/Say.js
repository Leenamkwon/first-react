import React, { useState } from 'react';

const Say = () => {
  const [message, setMessage] = useState(
    '저의 서커스에 오신걸 환영합니다. 크리피 서커스',
  );
  const onClickEnter = () => setMessage('안녕하세요');
  const onClickLeave = () => setMessage('잘가세요');

  const [color, setColor] = useState('black');

  return (
    <div>
      <button onClick={onClickEnter}>입장</button>
      <button onClick={onClickLeave}>퇴장</button>
      <h1 style={{ color }}>{message}</h1>
      <button style={{ color: 'red' }} onClick={() => setColor('red')}>
        빨간색
      </button>
      <button style={{ color: 'green' }} onClick={() => setColor('green')}>
        초록
      </button>
      <button style={{ color: 'blue' }} onClick={() => setColor('blue')}>
        블루
      </button>
    </div>
  );
};

export default Say;
