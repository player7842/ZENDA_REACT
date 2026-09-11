import { configureStore } from "@reduxjs/toolkit";
import sesionReducer from "./slices/sesion.slice";

export const store = configureStore({
  reducer: {
    sesion: sesionReducer
  }
});

// Exportación del tipo RootState para consumo global
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;