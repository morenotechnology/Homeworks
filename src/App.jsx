import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { increment, decrement, incrementBy } from './slices/counterSlice';
import { push, pop } from './slices/stackSlice';


// Componente principal
function App() {
  const dispatch = useDispatch();
  const counter = useSelector((state) => state.counter.value);
  const stack = useSelector((state) => state.stack.stack);
  const [incrementValue, setIncrementValue] = useState('');
  const [person, setPerson] = useState('');

  // Manejar la entrada para incrementar por un valor específico
  const handleIncrementBy = () => {
    const value = parseInt(incrementValue, 10);
    if (!isNaN(value)) {
      dispatch(incrementBy(value));
      setIncrementValue(''); // Limpiar el input
    }
  };

  // Manejar el input de nombre de la persona y agregarla a la pila
  const handleAddToStack = () => {
    if (person.trim()) {
      dispatch(push(person));
      setPerson(''); // Limpiar el input
    }
  };

  return (
    <div style={{ padding: '20px' }}>
      <h1>Counter and Stack with Redux</h1>

      {/* Contador */}
      <div>
        <h2>Counter: {counter}</h2>
        <button onClick={() => dispatch(increment())}>Increment</button>
        <button onClick={() => dispatch(decrement())}>Decrement</button>
        <div>
          <input
            type="number"
            value={incrementValue}
            onChange={(e) => setIncrementValue(e.target.value)}
            placeholder="Increment by"
          />
          <button onClick={handleIncrementBy}>Increment By</button>
        </div>
      </div>

      {/* Stack */}
      <div>
        <h2>Stack (People in the ATM):</h2>
        <input
          type="text"
          value={person}
          onChange={(e) => setPerson(e.target.value)}
          placeholder="Enter a person"
        />
        <button onClick={handleAddToStack}>Add to Stack</button>
        <ul>
          {stack.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
        <button onClick={() => dispatch(pop())}>Pop (Remove Last Person)</button>
      </div>
    </div>
  );
}

export default App;
