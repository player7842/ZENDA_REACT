// store/index.ts
import { configureStore } from "@reduxjs/toolkit";
import sesionReducer from "./slices/sesion.slice";

export const store = configureStore({
  reducer: {
    sesion: sesionReducer
    // Aquí agregaremos más slices después (proyectos, tareas, etc.)
  }
});

// Tipo para que TypeScript reconozca el Store
export type RootState = ReturnType<typeof store.getState>;