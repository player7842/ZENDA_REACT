import { Link, useLocation } from "react-router-dom";

const MenuPrincipal = () => {
  const ubicacion = useLocation(); // Detecta la página activa

  const estiloActivo = (ruta: string) =>
    ubicacion.pathname === ruta
      ? {
          color: "#FFFFFF",
          background: "linear-gradient(90deg, #39A900 0%, #2D7D00 100%)",
          padding: "0.5rem 1.2rem",
          borderRadius: "6px",
          fontWeight: "600",
          textDecoration: "none",
          boxShadow: "0 2px 4px rgba(57, 169, 0, 0.2)",
        }
      : {
          color: "#39A900",
          padding: "0.5rem 1.2rem",
          borderRadius: "6px",
          textDecoration: "none",
          transition: "all 0.2s ease",
          border: "1px solid transparent",
        };

  return (
    <nav
      style={{
        padding: "1rem",
        borderBottom: "2px solid #A8E063",
        background: "#FFFFFF",
        display: "flex",
        justifyContent: "center", // Centrado
        gap: "1.2rem",
      }}
    >
      <Link to="/" style={estiloActivo("/")}>
        Inicio
      </Link>
      <Link to="/login" style={estiloActivo("/login")}>
        Iniciar Sesión
      </Link>
      <Link to="/registro" style={estiloActivo("/registro")}>
        Registro
      </Link>
    </nav>
  );
};

export default MenuPrincipal;