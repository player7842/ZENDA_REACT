import { useSelector } from "react-redux";
// 💡 SOLUCIÓN: Uso explícito de 'import type' para satisfacer verbatimModuleSyntax
import type { RootState } from "../store/index";

const PerfilUsuario = () => {
  const usuario = useSelector((state: RootState) => state.sesion.usuario);
  const autenticado = useSelector((state: RootState) => state.sesion.autenticado);

  if (!autenticado || !usuario) {
    return (
      <div style={{ padding: "0.5rem 1rem", background: "#F5F7FA", borderRadius: "8px", fontSize: "0.85rem" }}>
        🔒 No has iniciado sesión
      </div>
    );
  }

  // Verde institucional SENA (#39A900) para roles de evaluación/coordinación[cite: 2]
  const colorRol = usuario.rol === "Instructor" || usuario.rol === "Coordinador" ? "#39A900" : "#3B82F6";

  return (
    <div style={{
      padding: "0.6rem 1rem",
      background: "#FFFFFF",
      border: "1px solid #E2E8F0",
      borderRadius: "8px",
      boxShadow: "0 2px 4px rgba(0,0,0,0.05)",
      fontSize: "0.85rem"
    }}>
      <p style={{ margin: 0, fontWeight: "bold", color: "#1E293B" }}>
        👤 {usuario.nombre}
      </p>
      <p style={{ margin: "0.2rem 0", color: colorRol, fontWeight: "600" }}>
        Rol: {usuario.rol}
      </p>
      {usuario.ficha && (
        <p style={{ margin: 0, color: "#64748B", fontSize: "0.78rem" }}>
          📋 Ficha: {usuario.ficha}
        </p>
      )}
    </div>
  );
};

export default PerfilUsuario;