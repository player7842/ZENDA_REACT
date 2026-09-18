import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import type { AppDispatch, RootState } from "../store";
import { obtenerNotificaciones } from "../store/slices/notificaciones.slice";

function PanelNotificaciones() {
  const dispatch = useDispatch<AppDispatch>();
  const { lista, cargando, error } = useSelector(
    (state: RootState) => state.notificaciones
  );
  const [abierto, setAbierto] = useState(false);

  // Se ejecuta una sola vez al montar el componente, sin importar la ruta activa
  useEffect(() => {
    dispatch(obtenerNotificaciones());
  }, [dispatch]);

  return (
    <div style={{ position: "relative" }}>
      <button
        onClick={() => setAbierto(!abierto)}
        style={{
          background: "none",
          border: "none",
          cursor: "pointer",
          fontSize: "1.3rem",
          position: "relative"
        }}
      >
        🔔
        {lista.length > 0 && (
          <span
            style={{
              position: "absolute",
              top: -4,
              right: -8,
              backgroundColor: "#EF4444",
              color: "#fff",
              borderRadius: "50%",
              fontSize: "0.65rem",
              padding: "1px 6px"
            }}
          >
            {lista.length}
          </span>
        )}
      </button>

      {abierto && (
        <div
          style={{
            position: "absolute",
            right: 0,
            top: "2rem",
            width: "300px",
            backgroundColor: "#fff",
            border: "1px solid #E5E7EB",
            borderRadius: "8px",
            boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
            zIndex: 50,
            maxHeight: "320px",
            overflowY: "auto"
          }}
        >
          <div style={{ padding: "0.75rem 1rem", borderBottom: "1px solid #E5E7EB" }}>
            <strong>Notificaciones</strong>
          </div>

          {cargando && <p style={{ padding: "1rem" }}>Cargando notificaciones...</p>}
          {error && <p style={{ padding: "1rem", color: "#EF4444" }}>{error}</p>}

          {!cargando && !error && lista.length === 0 && (
            <p style={{ padding: "1rem", color: "#636A72" }}>No hay notificaciones.</p>
          )}

          <ul style={{ listStyle: "none", margin: 0, padding: 0 }}>
            {lista.map((n) => (
              <li
                key={n.id}
                style={{ padding: "0.75rem 1rem", borderBottom: "1px solid #F3F4F6" }}
              >
                <p style={{ margin: 0, fontWeight: 600, fontSize: "0.9rem" }}>{n.titulo}</p>
                <p style={{ margin: "0.25rem 0", fontSize: "0.8rem", color: "#636A72" }}>
                  {n.mensaje}
                </p>
                <span style={{ fontSize: "0.7rem", color: "#9CA3AF" }}>{n.autor}</span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default PanelNotificaciones;