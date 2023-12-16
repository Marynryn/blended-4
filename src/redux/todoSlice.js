import { createSlice } from '@reduxjs/toolkit';

export const todoSlice = createSlice({
  name: 'todos',
  initialState: {
    todos: [],
  },
  reducers: {
    addTodos: (state, action) => {
      state.todos.push(action.payload);
    },
    deleteTodos: (state, action) => {
      return {
        ...state,
        todos: state.todos.filter(({ id }) => id !== action.payload),
      };
    },
  },
});

export const { addTodos, deleteTodos } = todoSlice.actions;
