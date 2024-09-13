import { configureStore } from "@reduxjs/toolkit";
import offersReducer from "./slices/offersSlice"; // Импортируйте свои редюсеры

export const store = configureStore({
  reducer: {
    offers: offersReducer, // Добавьте свои редюсеры здесь
  },
});
