import { createSlice } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

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
    changeTodo: (state, action) => {
      const { id, text } = action.payload;
      state.todos = state.todos.map(todo =>
        todo.id === id ? { ...todo, text } : todo
      );
    },
  },
});

const todosConfig = {
  key: 'todos',
  storage,
};

export default persistReducer(todosConfig, todoSlice.reducer);

export const { addTodos, deleteTodos, changeTodo } = todoSlice.actions;
