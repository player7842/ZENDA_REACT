import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

// Modelo vinculado a las tablas de la base de datos de ZENDA[cite: 2]
export interface UsuarioSesion {
  id: number;
  nombre: string;
  correo: string;
  rol: "Aprendiz" | "Instructor" | "Coordinador" | "Administrador"; //[cite: 2]
  ficha?: string;
  grupo?: string;
}

interface SesionState {
  usuario: UsuarioSesion | null;
  autenticado: boolean;
}

const initialState: SesionState = {
  usuario: {
    id: 1,
    nombre: "Camilo Torres",
    correo: "ctorres@sena.edu.co",
    rol: "Instructor", // Rol principal de seguimiento en ZENDA[cite: 2]
    ficha: "2558341 - CGMLTI",
    grupo: "Grupo 01 - Proyecto Formativo"
  },
  autenticado: true
};

const sesionSlice = createSlice({
  name: "sesion",
  initialState,
  reducers: {
    iniciarSesion: (state, action: PayloadAction<UsuarioSesion>) => {
      state.usuario = action.payload;
      state.autenticado = true;
    },
    cerrarSesion: (state) => {
      state.usuario = null;
      state.autenticado = false;
    }
  }
});

export const { iniciarSesion, cerrarSesion } = sesionSlice.actions;
export default sesionSlice.reducer;