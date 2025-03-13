// Father.js
import React, { useState } from 'react';
import Son from './Son';

export const Father = () => {
  const list = [2, 4, 6, 8, 10];
  const [numero, setNumero] = useState(null);

  const handleNumeroClick = (num) => {
    setNumero(num);
  };

  return (
    <div>
      <h1>PRESIONA UN NUMERO</h1>
      {numero !== null && <p>Numero presionado: {numero}</p>}
      <hr />
      {list.map((n, idx) => {
        return (
          <Son
            key={idx}
            numero={n}
            handleClick={handleNumeroClick}
          />
        );
      })}
    </div>
  );
};
