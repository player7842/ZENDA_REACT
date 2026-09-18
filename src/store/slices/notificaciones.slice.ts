import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// Modelo de notificación usado dentro de ZENDA
export interface Notificacion {
  id: number;
  titulo: string;
  mensaje: string;
  autor: string;
}

interface NotificacionesState {
  lista: Notificacion[];
  cargando: boolean;
  error: string | null;
}

const initialState: NotificacionesState = {
  lista: [],
  cargando: false,
  error: null,
};

// Thunk: realiza la petición GET a la API externa (JSONPlaceholder)
export const obtenerNotificaciones = createAsyncThunk(
  "notificaciones/obtener",
  async () => {
    const respuesta = await axios.get(
      "https://jsonplaceholder.typicode.com/comments?_limit=6"
    );

    // Transformamos la respuesta cruda de la API al modelo de Notificacion de ZENDA
    return respuesta.data.map((item: any) => ({
      id: item.id,
      titulo: item.name,
      mensaje: item.body,
      autor: item.email,
    })) as Notificacion[];
  }
);

const notificacionesSlice = createSlice({
  name: "notificaciones",
  initialState,
  reducers: {},
  // extraReducers maneja los 3 estados automáticos que genera createAsyncThunk
  extraReducers: (builder) => {
    builder
      .addCase(obtenerNotificaciones.pending, (state) => {
        state.cargando = true;
        state.error = null;
      })
      .addCase(obtenerNotificaciones.fulfilled, (state, action) => {
        state.cargando = false;
        state.lista = action.payload;
      })
      .addCase(obtenerNotificaciones.rejected, (state, action) => {
        state.cargando = false;
        state.error = action.error.message ?? "Error al obtener notificaciones";
      });
  },
});

export default notificacionesSlice.reducer;