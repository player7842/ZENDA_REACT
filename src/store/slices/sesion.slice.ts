// store/slices/sesion.slice.ts
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// ✅ Datos que coinciden con tus tablas de ZENDA
interface UsuarioSesion {
  nombre: string;
  rol: "Aprendiz" | "Instructor" | "Coordinador" | "Administrador";
  ficha?: string;
  grupo?: string;
}

interface SesionState {
  usuario: UsuarioSesion | null;
  autenticado: boolean;
}

// Estado inicial
const initialState: SesionState = {
  usuario: {
    nombre: "Camilo Torres",
    rol: "Instructor",
    ficha: "CGMLTI-001",
    grupo: "Desarrollo Software"
  },
  autenticado: true
};

const sesionSlice = createSlice({
  name: "sesion",
  initialState,
  reducers: {
    // Simula inicio de sesión
    iniciarSesion: (state, action: PayloadAction<UsuarioSesion>) => {
      state.usuario = action.payload;
      state.autenticado = true;
    },
    // Simula cierre de sesión
    cerrarSesion: (state) => {
      state.usuario = null;
      state.autenticado = false;
    }
  }
});

// Exportar acciones para usarlas en componentes
export const { iniciarSesion, cerrarSesion } = sesionSlice.actions;

// Exportar reducer para el Store
export default sesionSlice.reducer;