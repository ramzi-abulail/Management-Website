// src/slices/cardSlice.js
import { createSlice } from '@reduxjs/toolkit';

const cardSlice = createSlice({
  name: 'cards',
  initialState: [],
  reducers: {
    addCard: (state, action) => {
      state.push(action.payload);
    },
    updateCard: (state, action) => {
      const { id } = action.payload;
      const existingCard = state.find((card) => card.id === id);
      if (existingCard) {
        Object.assign(existingCard, action.payload);
      }
    },
    deleteCard: (state, action) => {
      const cardId = action.payload;
      return state.filter((card) => card.id !== cardId);
    },
  },
});

export const { addCard, updateCard, deleteCard } = cardSlice.actions;
export default cardSlice.reducer;
