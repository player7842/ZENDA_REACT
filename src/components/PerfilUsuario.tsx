// components/PerfilUsuario.tsx
import { useSelector } from "react-redux";
import { RootState } from "../store";

const PerfilUsuario = () => {
  // ✅ Leemos datos del estado global — se actualiza automáticamente
  const usuario = useSelector((state: RootState) => state.sesion.usuario);
  const autenticado = useSelector((state: RootState) => state.sesion.autenticado);

  if (!autenticado || !usuario) {
    return (
      <div style={{ padding: "0.6rem 1rem", background: "#F5F7FA", borderRadius: "8px", fontSize: "0.9rem" }}>
        🔒 No has iniciado sesión
      </div>
    );
  }

  // Colores según rol
  const colorRol = usuario.rol === "Instructor" ? "#39A900" : "#3B82F6";

  return (
    <div style={{
      padding: "0.7rem 1rem",
      background: "#FFFFFF",
      border: "1px solid #E8F5E1",
      borderRadius: "10px",
      maxWidth: "280px",
      boxShadow: "0 2px 6px rgba(57, 169, 0, 0.06)"
    }}>
      <p style={{ margin: 0, fontWeight: "600", color: "#1B1B1B" }}>
        👤 {usuario.nombre}
      </p>
      <p style={{ margin: "0.25rem 0", fontSize: "0.85rem", color: colorRol, fontWeight: "500" }}>
        {usuario.rol}
      </p>
      {usuario.ficha && (
        <p style={{ margin: "0.15rem 0", fontSize: "0.8rem", color: "#636A72" }}>
          📋 Ficha: {usuario.ficha}
        </p>
      )}
      {usuario.grupo && (
        <p style={{ margin: "0.15rem 0 0 0", fontSize: "0.8rem", color: "#636A72" }}>
          👥 Grupo: {usuario.grupo}
        </p>
      )}
    </div>
  );
};

export default PerfilUsuario;