import { createSlice } from '@reduxjs/toolkit';

export const stackSlice = createSlice({
  name: 'stack',
  initialState: {
    stack: [],
  },
  reducers: {
    push: (state, action) => {
      state.stack.push(action.payload); // Agregar un nuevo libro o persona a la pila
    },
    pop: (state) => {
      state.stack.pop(); // Eliminar el último elemento de la pila
    },
  },
});

export const { push, pop } = stackSlice.actions;

export default stackSlice.reducer;
